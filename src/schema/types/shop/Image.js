import { GraphQLObjectType, GraphQLString } from 'graphql';

const Image = new GraphQLObjectType({
  name: 'Image',
  fields: {
    url: { type: GraphQLString },
    caption: { type: GraphQLString },
  },
});

export default Image;
