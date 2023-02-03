import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import { graphqlHTTP } from 'express-graphql';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import ActorModel from './modules/actor/actor.model';
import { ActorResolver } from './modules/actor/actor.resolver';
import ActorMovieModel from './modules/actormovie/actormovie.model';
import AuthorModel from './modules/author/author.model';
import { AuthorResolver } from './modules/author/author.resolver';
import MovieModel from './modules/movie/movie.model';
import { MovieResolver } from './modules/movie/movie.resolver';

const dbInit = () => Promise.all([
  AuthorModel.sync().then(() => {
    AuthorModel.hasMany(MovieModel, {
      // Associate with Relations
      foreignKey: 'idAuthor',
      as: 'movies'
    });
  }),
  MovieModel.sync().then(() => {
    // Associate with Relations
    MovieModel.belongsTo(AuthorModel, {
      foreignKey: 'idAuthor',
      targetKey: 'idAuthor',
      as: 'author'
    });
  }),
  ActorModel.sync().then(() => {
  }),
  ActorMovieModel.sync(),
])

dbInit();

const main = async () => {

  // Initialization of Schemas
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

  // Initialize Apollo/GraphQL Server
  const server = new ApolloServer({
    schema,
    plugins: [ ApolloServerPluginLandingPageGraphQLPlayground ],
  });

  const app = Express();

  // Enable GraphiQL
  app.use(
    '/graphiql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  );

  // Start a Server
  await server.start();

  // Apply Middleware
  server.applyMiddleware({ app });

  // Listen a Port
  app.listen({ port: 3333 }, () =>
    console.log(
      `🚀 Server ready and listening at ==> http://localhost:3333${server.graphqlPath}`
    )
  );
};

main().catch((error) => {
  console.log(error, 'error');
});
