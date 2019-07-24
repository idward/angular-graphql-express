import { Prisma } from 'prisma-binding';
import path from 'path';

const prisma = new Prisma({
  typeDefs: path.resolve(__dirname, 'prisma', 'generated', 'prisma.graphql'),
  endpoint: 'http://localhost:4466'
});

export default prisma;
