import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

import LeagueEvents from './LeagueEvents';
import League from './League';
import Sport from './Sport';

const LeagueTeams = new GraphQLObjectType({
  name: 'LeagueTeams',
  fields: {
    teamDescription: { type: GraphQLString },
    teamID: { type: GraphQLInt },
    teamName: { type: GraphQLString },
    events: { type: LeagueEvents },
    leagues: { type: GraphQLList(League) },
    logoURL: { type: GraphQLString },
    photoURL: { type: GraphQLString },
    sport: { type: Sport },
  },
});

export default LeagueTeams;
