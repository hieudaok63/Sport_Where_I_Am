import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import * as fields from './queries/index';

const api = new GraphQLObjectType({
  name: 'api',
  fields,
});

module.exports = new GraphQLSchema({
  query: api,
});
