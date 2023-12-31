import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

const User = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    displayName: { type: GraphQLString },
    username: { type: GraphQLString },
    firstName: { type: GraphQLString },
    surname: { type: GraphQLID },
    dateUpdated: { type: GraphQLString },
    email: { type: GraphQLString },
    wpid: { type: GraphQLString },

    // auth info
    userToken: { type: GraphQLString },

    // social auth info
    // TODO: add social auth info
  },
});

export default User;
