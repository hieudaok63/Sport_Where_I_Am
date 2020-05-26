import { GraphQLList } from 'graphql';
import League from '../types/League';
import { getAllLeagues } from '../../services/league-service';

export const allLeagues = {
  type: GraphQLList(League),
  args: {},
  resolve: (rawUserData, args, req) => getAllLeagues(req.token),
};

