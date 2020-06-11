import { GraphQLInt, GraphQLList, GraphQLString } from 'graphql';
import NewsItem from '../types/NewsItem';

import getNewsData from '../../services/newsData-service';

export const getNews = {
  type: GraphQLList(NewsItem),
  args: {
    interestId: { type: GraphQLInt },
    interestType: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) =>
    getNewsData(args.interestId, args.interestType, req.token),
};
