import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} from 'graphql';

const Popular = new GraphQLObjectType({
  name: 'Popular',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    date: { type: GraphQLString },
    state: { type: GraphQLString },
    city: { type: GraphQLString },
    price: { type: GraphQLFloat },
    thisHref: { type: GraphQLString },
    venuesHref: { type: GraphQLString },
    eventsHref: { type: GraphQLString },
  },
});

export default Popular;
