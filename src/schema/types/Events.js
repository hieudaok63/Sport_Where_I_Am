import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
} from 'graphql';

const PriceType = entity =>
  new GraphQLObjectType({
    name: `${entity}Price`,
    fields: {
      amount: { type: GraphQLFloat },
      currencyId: { type: GraphQLString },
    },
  });

const SportType = entity =>
  new GraphQLObjectType({
    name: `${entity}Sport`,
    fields: {
      sportID: { type: GraphQLInt },
      sportIconURL: { type: GraphQLString },
      sportIconURLV4: { type: GraphQLString },
      sportName: { type: GraphQLString },
    },
  });

const LeagueType = entity =>
  new GraphQLObjectType({
    name: `${entity}League`,
    fields: {
      leagueAbbreviation: { type: GraphQLString },
      leagueID: { type: GraphQLInt },
      leagueName: { type: GraphQLString },
      sport: { type: SportType(entity) },
    },
  });

const TeamsType = entity =>
  new GraphQLObjectType({
    name: `${entity}Teams`,
    fields: {
      teamName: { type: GraphQLString },
      teamid: { type: GraphQLInt },
    },
  });

const CountryType = entity =>
  new GraphQLObjectType({
    name: `${entity}Country`,
    fields: {
      countryID: { type: GraphQLString },
      countryName: { type: GraphQLString },
    },
  });

const CityType = entity =>
  new GraphQLObjectType({
    name: `${entity}City`,
    fields: {
      cityID: { type: GraphQLInt },
      cityName: { type: GraphQLString },
      country: { type: CountryType(entity) },
    },
  });

const CoOrdinatesType = entity =>
  new GraphQLObjectType({
    name: `${entity}CoOrdinates`,
    fields: {
      latitude: { type: GraphQLInt },
      longitude: { type: GraphQLInt },
    },
  });

const VenueType = entity =>
  new GraphQLObjectType({
    name: `${entity}Venue`,
    fields: {
      city: { type: CityType(entity) },
      coOrdinates: { type: CoOrdinatesType(entity) },
      venueAddress: { type: GraphQLString },
      venueID: { type: GraphQLInt },
      venueImage: { type: GraphQLString },
      venueName: { type: GraphQLString },
    },
  });

const Events = name =>
  new GraphQLObjectType({
    name,
    fields: {
      eventDateTime: { type: GraphQLString },
      eventID: { type: GraphQLInt },
      eventImage: { type: GraphQLString },
      eventName: { type: GraphQLString },
      fromPrice: { type: PriceType(name) },
      league: { type: LeagueType(name) },
      teams: { type: new GraphQLList(TeamsType(name)) },
      venue: { type: VenueType(name) },
    },
  });

export default Events;
