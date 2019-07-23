import path from 'path';
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';

const typeArrays = fileLoader(path.resolve(__dirname, 'resolver'), { recursive: true });
const typeMerged = mergeResolvers(typeArrays);

export default typeMerged;
