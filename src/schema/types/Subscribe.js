import { GraphQLObjectType, GraphQLString } from 'graphql';

const Subscribe = new GraphQLObjectType({
  name: 'Subscribe',
  fields: {
    email: { type: GraphQLString },
    fullName: { type: GraphQLString },
  },
});

export default Subscribe;
