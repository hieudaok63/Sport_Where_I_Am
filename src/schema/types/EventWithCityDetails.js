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

import City from './City';
import { getCityById } from '../../services/city-service';

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
  },
});

export default EventWithCityDetails;
