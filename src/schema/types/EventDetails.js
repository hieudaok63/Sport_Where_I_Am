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
    eventId: { type: GraphQLID },
    // eventid: { type: GraphQLID }, // old
    headline: { type: GraphQLString },
    eventName: { type: GraphQLString },
    sportId: { type: GraphQLInt },
    // sportid: { type: GraphQLInt }, // old
    venue: { type: VenueDetails },
    venueId: { type: GraphQLInt },
    // venueid: { type: GraphQLInt }, // old
    leagueId: { type: GraphQLString },
    // leagueid: { type: GraphQLString }, // old
    sportName: { type: GraphQLString },
    dateTime: { type: GraphQLString },
    priceFrom: { type: GraphQLFloat },
    venueWordpressId: { type: GraphQLInt },
    // venueWordpressID: { type: GraphQLInt }, // old
    buyTicketsURL: { type: GraphQLString },
    teamA: { type: GraphQLString },
    teamB: { type: GraphQLString },
    abbrev: { type: TeamAbbrev },
    cityId: { type: GraphQLInt },
    cityid: { type: GraphQLInt }, // old
    timelineItemType: { type: GraphQLString },
    dateTimeStamp: { type: GraphQLString },
    niceWhen: { type: GraphQLString },
    isFuture: { type: GraphQLBoolean },
    sportIcon: { type: GraphQLString },
    leagueImage: { type: GraphQLString },
    eventImage: { type: GraphQLString },
    venueImage: { type: GraphQLString },
  },
});

export default EventDetails;
