import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const BlogPost = new GraphQLObjectType({
  name: 'BlogPost',
  fields: {
    blogpostID: { type: GraphQLInt },
    blogpostSummary: { type: GraphQLString },
    blogpostTitle: { type: GraphQLString },
    imageURL: { type: GraphQLString },
    link: { type: GraphQLString },
  },
});

export default BlogPost;
