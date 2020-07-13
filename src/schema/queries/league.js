import { GraphQLInt, GraphQLList } from 'graphql';
import League from '../types/League';
import leagueVideo from '../types/LeagueVideo';
import LeagueTeams from '../types/LeagueTeams';

import {
  getLeagueInfo,
  getLeagueVideos,
  getLeagueTeams,
  getTopLeagues,
} from '../../services/league-service';

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

export const getleagueTeams = {
  type: GraphQLList(LeagueTeams),
  args: { leagueId: { type: GraphQLInt } },
  resolve: (rawUserData, args, req) => getLeagueTeams(req.token, args.leagueId),
};

export const topLeagues = {
  type: GraphQLList(LeagueTeams),
  args: {},
  resolve: (rawUserData, args, req) => getTopLeagues(req.token, args.leagueId),
};
