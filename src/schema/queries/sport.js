import { GraphQLInt, GraphQLList } from 'graphql';
import Sport from '../types/Sport';
import { getAllSports } from '../../services/sport-service';

export const allSports = {
  type: GraphQLList(Sport),
  args: {
    offset: { type: GraphQLInt },
  },
  resolve: (rawUserData, args, req) => getAllSports(args, req.token),
};
