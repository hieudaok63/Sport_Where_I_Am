import { GraphQLObjectType, GraphQLString } from 'graphql';

const Info = new GraphQLObjectType({
  name: 'Info',
  fields: {
    type: { type: GraphQLString },
    text: { type: GraphQLString },
  },
});

export default Info;
