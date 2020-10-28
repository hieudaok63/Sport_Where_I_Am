import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import TeamAbbrev from './TeamAbbrev';
import VenueDetails from './VenueDetails';

const EventsType = new GraphQLObjectType({
  name: 'TeamEvents',
  fields: {
    abbrev: { type: TeamAbbrev },
    buyTicketsURL: { type: GraphQLString },
    cityId: { type: GraphQLInt },
    dateTime: { type: GraphQLString },
    dateTimeStamp: { type: GraphQLString },
    eventId: { type: GraphQLInt },
    eventImage: { type: GraphQLString },
    eventName: { type: GraphQLString },
    headline: { type: GraphQLString },
    isFuture: { type: GraphQLBoolean },
    niceWhen: { type: GraphQLString },
    priceFrom: { type: GraphQLFloat },
    sportIcon: { type: GraphQLString },
    sportName: { type: GraphQLString },
    sportId: { type: GraphQLInt },
    teamA: { type: GraphQLString },
    teamB: { type: GraphQLString },
    timelineItemType: { type: GraphQLString },
    venueWordpressID: { type: GraphQLInt },
    venueId: { type: GraphQLInt },
    venue: { type: VenueDetails },
  },
});

const SportType = new GraphQLObjectType({
  name: 'TeamSport',
  fields: {
    sportCardImage: { type: GraphQLString },
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
    events: { type: GraphQLList(EventsType) },
    primaryLeague: { type: LeaguesType },
    leagues: { type: GraphQLList(LeaguesType) },
    logoURL: { type: GraphQLString },
    photoURL: { type: GraphQLString },
    sport: { type: SportType },
    teamDescription: { type: GraphQLString },
    teamID: { type: GraphQLInt },
    teamName: { type: GraphQLString },
  },
});

export default Team;
