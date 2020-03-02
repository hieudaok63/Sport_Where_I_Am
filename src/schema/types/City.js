import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const City = new GraphQLObjectType({
  name: 'City',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    thisHref: { type: GraphQLString },
    venuesHref: { type: GraphQLString },
    eventsHref: { type: GraphQLString },
  },
});

export default City;
