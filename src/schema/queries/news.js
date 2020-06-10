import { GraphQLInt, GraphQLList, GraphQLString } from 'graphql';
import NewsItem from '../types/News';

import getNewsData from '../../services/newsData-service';

export const getleagueNews = {
  type: GraphQLList(NewsItem),
  args: {
    postId: { type: GraphQLInt },
    type: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) =>
    getNewsData(args.post, args.type, req.token),
};
