import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { cityById, allCities } from './queries/index';

const api = new GraphQLObjectType({
  name: 'api',
  fields: {
    cityById,
    allCities,
  },
});

module.exports = new GraphQLSchema({
  query: api,
});
