import { GraphQLList } from 'graphql';
import Sport from '../types/Sport';
import { getAllSports } from '../../services/sport-service';

export const allSports = {
  type: GraphQLList(Sport),
  args: {},
  resolve: (rawUserData, args, req) => getAllSports(req.headers.authorization),
};
