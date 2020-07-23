import { GraphQLInt, GraphQLList, GraphQLString } from 'graphql';

import InterestData, { InterestQuestion } from '../types/InterestData';
import {
  getInterestData,
  getInterestQuestions,
} from '../../services/news-service';

const interestData = {
  type: GraphQLList(InterestData),
  args: {
    interestId: { type: GraphQLInt },
    interestType: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) =>
    getInterestData(args.interestId, args.interestType, req.token),
};

export const interestQuestions = {
  type: GraphQLList(InterestQuestion),
  args: {
    interestId: { type: GraphQLInt },
    interestType: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) =>
    getInterestQuestions(args.interestId, args.interestType, req.token),
};

export default interestData;
