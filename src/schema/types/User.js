import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

const User = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    displayName: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLID },
    dateUpdated: { type: GraphQLString },
    email: { type: GraphQLString },

    // auth info
    token: { type: GraphQLString },

    // social auth info
    // TODO: add social auth info
  },
});

export default User;
