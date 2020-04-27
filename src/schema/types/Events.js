import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
} from 'graphql';

const Price = entity =>
  new GraphQLObjectType({
    name: `${entity}Price`,
    fields: {
      amount: { type: GraphQLFloat },
      currencyId: { type: GraphQLString },
    },
  });

const Sport = entity =>
  new GraphQLObjectType({
    name: `${entity}Sport`,
    fields: {
      sportID: { type: GraphQLInt },
      sportIconURL: { type: GraphQLString },
      sportIconURLV4: { type: GraphQLString },
      sportName: { type: GraphQLString },
    },
  });

const League = entity =>
  new GraphQLObjectType({
    name: `${entity}League`,
    fields: {
      leagueAbbreviation: { type: GraphQLString },
      leagueID: { type: GraphQLInt },
      leagueName: { type: GraphQLString },
      sport: { type: Sport(entity) },
    },
  });

const Teams = entity =>
  new GraphQLObjectType({
    name: `${entity}Teams`,
    fields: {
      teamName: { type: GraphQLString },
      teamid: { type: GraphQLInt },
    },
  });

const Country = entity =>
  new GraphQLObjectType({
    name: `${entity}Country`,
    fields: {
      countryID: { type: GraphQLString },
      countryName: { type: GraphQLString },
    },
  });

const City = entity =>
  new GraphQLObjectType({
    name: `${entity}City`,
    fields: {
      cityID: { type: GraphQLInt },
      cityName: { type: GraphQLString },
      country: { type: Country(entity) },
    },
  });

const CoOrdinates = entity =>
  new GraphQLObjectType({
    name: `${entity}CoOrdinates`,
    fields: {
      latitude: { type: GraphQLInt },
      longitude: { type: GraphQLInt },
    },
  });

const Venue = entity =>
  new GraphQLObjectType({
    name: `${entity}Venue`,
    fields: {
      city: { type: City(entity) },
      coOrdinates: { type: CoOrdinates(entity) },
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
      fromPrice: { type: Price(name) },
      league: { type: League(name) },
      teams: { type: new GraphQLList(Teams(name)) },
      venue: { type: Venue(name) },
    },
  });

export default Events;
