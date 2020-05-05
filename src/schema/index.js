import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import * as queryFields from './queries/index';
import * as mutationFields from './mutations/index';

const query = new GraphQLObjectType({
  name: 'QueryAPI',
  fields: queryFields,
});

const mutation = new GraphQLObjectType({
  name: 'MutationAPI',
  fields: mutationFields,
});

module.exports = new GraphQLSchema({
  query,
  mutation,
});
