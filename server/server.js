import 'babel-polyfill';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import prisma from './prisma';
import typeDefs from './models/typedefs';
import resolvers from './models/resolvers';

const app = express();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context(request) {
    return { prisma };
  }
});

apolloServer.applyMiddleware({ app });

app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
