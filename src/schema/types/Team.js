import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import TeamAbbrev from './TeamAbbrev';

const EventsType = new GraphQLObjectType({
  name: 'TeamEvents',
  fields: {
    abbrev: { type: TeamAbbrev },
    buyTicketsURL: { type: GraphQLString },
    cityid: { type: GraphQLInt },
    dateTime: { type: GraphQLString },
    dateTimeStamp: { type: GraphQLString },
    eventId: { type: GraphQLInt },
    eventName: { type: GraphQLString },
    headline: { type: GraphQLString },
    isFuture: { type: GraphQLBoolean },
    niceWhen: { type: GraphQLString },
    priceFrom: { type: GraphQLFloat },
    sportIcon: { type: GraphQLString },
    sportName: { type: GraphQLString },
    sportid: { type: GraphQLInt },
    teamA: { type: GraphQLString },
    teamB: { type: GraphQLString },
    timelineItemType: { type: GraphQLString },
    venueWordpressID: { type: GraphQLInt },
    venueid: { type: GraphQLInt },
  },
});

const SportType = new GraphQLObjectType({
  name: 'TeamSport',
  fields: {
    sportID: { type: GraphQLInt },
    sportIconURL: { type: GraphQLString },
    sportIconURLV4: { type: GraphQLString },
    sportName: { type: GraphQLString },
  },
});

const LeaguesType = new GraphQLObjectType({
  name: 'Leagues',
  fields: {
    cardImageURL: { type: GraphQLString },
    leagueAbbreviation: { type: GraphQLString },
    leagueDescription: { type: GraphQLString },
    leagueId: { type: GraphQLInt },
    leagueName: { type: GraphQLString },
    photoURL: { type: GraphQLString },
    sport: { type: SportType },
  },
});

const Team = new GraphQLObjectType({
  name: 'Team',
  fields: {
    events: { type: EventsType },
    leagues: { type: LeaguesType },
    logoURL: { type: GraphQLString },
    photoURL: { type: GraphQLString },
    sport: { type: SportType },
    teamDescription: { type: GraphQLString },
    teamID: { type: GraphQLInt },
    teamName: { type: GraphQLString },
  },
});

export default Team;
