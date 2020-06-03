import { GraphQLInt } from 'graphql';
import League from '../types/League';
import { getLeagueInfo } from '../../services/league-service';

export const leagueInfo = {
  type: League,
  args: { leagueId: { type: GraphQLInt } },
  resolve: (rawUserData, args, req) => getLeagueInfo(req.token, args.leagueId),

  
};
