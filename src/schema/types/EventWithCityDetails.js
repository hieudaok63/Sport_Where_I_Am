import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLID,
  GraphQLBoolean,
} from 'graphql';
import VenueDetails from './VenueDetails';
import TeamAbbrev from './TeamAbbrev';
import League from './League';
import City from './City';
import { getCityById } from '../../services/city-service';
import { getEventDataById } from '../../services/event-service';
import { getLeagueInfoByAbbreviation } from '../../services/league-service';
import FeaturedEventData, { FromPriceData } from './FeaturedEventData';

const EventData = new GraphQLObjectType({
  name: 'EventData',
  fields: {
    eventID: { type: GraphQLID },
    eventDateTime: { type: GraphQLString },
    eventImage: { type: GraphQLString },
    eventName: { type: GraphQLString },
    league: { type: League },
    venue: { type: VenueDetails },
    eventTicketingUrl : { type : GraphQLString },
    featuredEvent: { type: GraphQLBoolean },
    featuredData: { type: FeaturedEventData },
    fromPrice : { type : FromPriceData },
  },
});

const EventWithCityDetails = new GraphQLObjectType({
  name: 'EventWithCityDetails',
  fields: {
    eventid: { type: GraphQLID },
    headline: { type: GraphQLString },
    eventName: { type: GraphQLString },
    sportid: { type: GraphQLInt },
    venue: { type: VenueDetails },
    venueid: { type: GraphQLInt },
    leagueid: { type: GraphQLString },
    sportName: { type: GraphQLString },
    dateTime: { type: GraphQLString },
    priceFrom: { type: GraphQLFloat },
    venueWordpressID: { type: GraphQLInt },
    buyTicketsURL: { type: GraphQLString },
    teamA: { type: GraphQLString },
    teamB: { type: GraphQLString },
    abbrev: { type: TeamAbbrev },
    cityid: { type: GraphQLInt },
    timelineItemType: { type: GraphQLString },
    dateTimeStamp: { type: GraphQLString },
    niceWhen: { type: GraphQLString },
    isFuture: { type: GraphQLBoolean },
    sportIcon: { type: GraphQLString },
    cityData: {
      type: City,
      resolve: (rawCityData, args, req) => {
        const { venue, cityid } = rawCityData;
        if (cityid) return getCityById(cityid, req.headers.authorization);
        else if (venue && venue.cityid) {
          return getCityById(venue.cityid, req.headers.authorization);
        }
        return null;
      },
    },
    moreEventData: {
      type: EventData,
      resolve: (rawEventData, args, req) => {
        const { eventid } = rawEventData;
        if (eventid) {
          return getEventDataById(eventid, req.headers.authorization);
        }
        return null;
      },
    },
    league: {
      type: League,
      resolve: (rawEventData, args, req) => {
        // NB: leagueid in this case is actually the abbreviation
        const { leagueid } = rawEventData;
        if (leagueid)
          return getLeagueInfoByAbbreviation(
            req.headers.authorization,
            leagueid
          );
        return null;
      },
    },
  },
});

export default EventWithCityDetails;
