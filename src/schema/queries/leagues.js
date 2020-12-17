import { GraphQLList, GraphQLString, GraphQLInt } from 'graphql';
import League, { LeagueDashboard, LeagueCarousel } from '../types/League';
import {
  getAllLeagues,
  getLeagueInfo,
  getContentDashboard,
  getContentCarousel,
} from '../../services/league-service';

export const allLeagues = {
  type: GraphQLList(League),
  args: {},
  resolve: (rawUserData, args, req) => getAllLeagues(req.headers.authorization),
};

export const contentDashboard = {
  type: GraphQLList(LeagueDashboard),
  args: {
    interestId: { type: GraphQLInt },
    interestType: { type: GraphQLString },
  },
  resolve: (rawData, args, req) => {
    const { interestId, interestType } = args;
    if (interestId !== undefined && interestType !== undefined) {
      return getContentDashboard(
        req.headers.authorization,
        interestId,
        interestType
      );
    }
    return null;
  },
};

export const contentCarousel = {
  type: GraphQLList(LeagueCarousel),
  args: {
    interestId: { type: GraphQLInt },
    interestType: { type: GraphQLString },
  },
  resolve: (rawData, args, req) => {
    const { interestId, interestType } = args;
    if (interestId !== undefined && interestType !== undefined) {
      return getContentCarousel(
        req.headers.authorization,
        interestId,
        interestType
      );
    }
    return null;
  },
};
