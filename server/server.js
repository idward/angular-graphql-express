import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import prisma from './prisma';

const app = express();

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  }
};

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
