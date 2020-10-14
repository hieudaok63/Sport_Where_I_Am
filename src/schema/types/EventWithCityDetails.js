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
import { getLeagueInfo } from '../../services/league-service';

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
        const { venue } = rawCityData;
        if (venue && venue.cityid) {
          return getCityById(venue.cityid, req.token);
        }
        return null;
      },
    },
    league: {
      type: League,
      resolve: (rawEventData, args, req) => {
        // TODO: use leagueId from parent data when it has been changed from abbreviation to id
        // const { leagueId } = rawEventData;
        const leagueId = 200;
        if (leagueId) return getLeagueInfo(req.token, leagueId);
        return null;
      },
    },
  },
});

export default EventWithCityDetails;
