import { GraphQLInt, GraphQLList } from 'graphql';
import League from '../types/League';
import leagueVideo from '../types/LeagueVideo';
import LeagueTeams from '../types/LeagueTeams';

import {
  getLeagueInfo,
  getLeagueVideos,
  getLeagueTeams,
  getTopLeagues,
  getLeaguesByCityId,
} from '../../services/league-service';

export const leagueInfo = {
  type: League,
  args: { leagueId: { type: GraphQLInt } },
  resolve: (rawUserData, args, req) =>
    getLeagueInfo(req.headers.authorization, args.leagueId),
};

export const getleagueVideos = {
  type: GraphQLList(leagueVideo),
  args: { leagueId: { type: GraphQLInt } },
  resolve: (rawUserData, args, req) =>
    getLeagueVideos(req.headers.authorization, args.leagueId),
};

export const getleagueTeams = {
  type: GraphQLList(LeagueTeams),
  args: { leagueId: { type: GraphQLInt } },
  resolve: (rawUserData, args, req) =>
    getLeagueTeams(req.headers.authorization, args.leagueId),
};

export const topLeagues = {
  type: GraphQLList(League),
  args: {},
  resolve: (rawUserData, args, req) =>
    getTopLeagues(req.headers.authorization, args.leagueId),
};

export const leaguesByCityId = {
  type: GraphQLList(League),
  args: { cityId: { type: GraphQLInt } },
  resolve: (rawUserData, args, req) =>
    getLeaguesByCityId(req.headers.authorization, args.cityId),
};
