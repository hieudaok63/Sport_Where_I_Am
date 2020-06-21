import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const BlogPost = new GraphQLObjectType({
  name: 'BlogPost',
  fields: {
    id: { type: GraphQLInt },
    summary: { type: GraphQLString },
    title: { type: GraphQLString },
    imageURL: { type: GraphQLString },
    link: { type: GraphQLString },
  },
});

export default BlogPost;
