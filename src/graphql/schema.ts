import { GraphQLSchema } from 'graphql';
import { informationsType } from './root-query-type';

const graphqlSchema = new GraphQLSchema({
  query: informationsType,
});

export { graphqlSchema };
