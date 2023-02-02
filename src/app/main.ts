import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import ActorModel from './modules/actor/actor.model';
import { ActorResolver } from './modules/actor/actor.resolver';
import AuthorModel from './modules/author/author.model';
import { AuthorResolver } from './modules/author/author.resolver';
import MovieModel from './modules/movie/movie.model';
import { MovieResolver } from './modules/movie/movie.resolver';

const dbInit = () => Promise.all([
  AuthorModel.sync({ alter: true }),
  MovieModel.sync({ alter: true }),
  ActorModel.sync({ alter: true }),
])

dbInit();


const main = async () => {
  const schema = await buildSchema({
    resolvers: [
      ActorResolver,
      AuthorResolver,
      MovieResolver,
    ],
    emitSchemaFile: true,
    validate: false,
  });

  // TODO: Connect to Postgre DBMS

  const server = new ApolloServer({
    schema,
    plugins: [ ApolloServerPluginLandingPageGraphQLPlayground ],
  });

  const app = Express();

  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port: 3333 }, () =>
    console.log(
      `🚀 Server ready and listening at ==> http://localhost:3333${server.graphqlPath}`
    )
  );
};

main().catch((error) => {
  console.log(error, 'error');
});
