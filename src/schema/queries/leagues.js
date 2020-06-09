import { GraphQLList, GraphQLString, GraphQLInt } from 'graphql';
import League from '../types/League';
import { getAllLeagues, getLeagueInfo } from '../../services/league-service';

export const allLeagues = {
  type: GraphQLList(League),
  args: {},
  resolve: (rawUserData, args, req) => getAllLeagues(req.token),
};
