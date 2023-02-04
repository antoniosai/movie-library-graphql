import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import { graphqlHTTP } from 'express-graphql';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { dbInit } from './config/db/init';
import { ActorResolver } from './modules/actor/actor.resolver';
import { ActorMovieResolver } from './modules/actormovie/actormovie.resolver';
import { AuthorResolver } from './modules/author/author.resolver';
import { MovieResolver } from './modules/movie/movie.resolver';

// Initialize Database

dbInit();
const main = async () => {

  // Initialization of Schemas
  const schema = await buildSchema({
    resolvers: [
      ActorResolver,
      AuthorResolver,
      MovieResolver,
      ActorMovieResolver,
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
