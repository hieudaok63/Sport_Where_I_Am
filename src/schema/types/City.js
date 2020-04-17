import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} from 'graphql';

const City = new GraphQLObjectType({
  name: 'City',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    date: { type: GraphQLString },
    state: { type: GraphQLString },
    city: { type: GraphQLString },
    price: { type: GraphQLFloat },
    thisHref: { type: GraphQLString },
    venuesHref: { type: GraphQLString },
    eventsHref: { type: GraphQLString },
  },
});

export default City;
