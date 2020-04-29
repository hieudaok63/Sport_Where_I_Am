import { GraphQLList } from 'graphql';

import BlogPost from '../types/BlogPost';
import { getAllBlogPosts } from '../../services/blogPost-service';

export const allBlogPosts = {
  type: GraphQLList(BlogPost),
  args: {},
  resolve: (rawUserData, args, req) => getAllBlogPosts(req.token),
};
