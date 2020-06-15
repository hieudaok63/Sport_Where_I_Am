import { GraphQLInt, GraphQLList, GraphQLString } from 'graphql';

import InterestData from '../types/InterestData';
import { getInterestData } from '../../services/news-service';

const interestData = {
  type: GraphQLList(InterestData),
  args: {
    interestId: { type: GraphQLInt },
    interestType: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) =>
    getInterestData(args.interestId, args.interestType, req.token),
};

export default interestData;
