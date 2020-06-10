import { GraphQLInt, GraphQLList, GraphQLString } from 'graphql';
import NewsItem from '../types/NewsItem';

import getNewsData from '../../services/newsData-service';

export const getNews = {
  type: GraphQLList(NewsItem),
  args: {
    postId: { type: GraphQLInt },
    type: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) =>
    getNewsData(args.post, args.type, req.token),
};
