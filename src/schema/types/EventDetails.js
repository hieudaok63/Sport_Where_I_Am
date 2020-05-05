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

const EventDetails = new GraphQLObjectType({
  name: 'EventDetails',
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
  },
});

export default EventDetails;
