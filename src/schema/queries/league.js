import { GraphQLInt, GraphQLList } from 'graphql';
import League from '../types/League';
import leagueVideo from '../types/LeagueVideo';
import { getLeagueInfo, getLeagueVideos } from '../../services/league-service';

export const leagueInfo = {
  type: League,
  args: { leagueId: { type: GraphQLInt } },
  resolve: (rawUserData, args, req) => getLeagueInfo(req.token, args.leagueId),
};

export const getleagueVideos = {
  type: GraphQLList(leagueVideo),
  args: { leagueId: { type: GraphQLInt } },
  resolve: (rawUserData, args, req) =>
    getLeagueVideos(req.token, args.leagueId),
};
