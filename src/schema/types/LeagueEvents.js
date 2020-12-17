import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';
import VenueDetails from './VenueDetails';

const leagueEvents = new GraphQLObjectType({
  name: 'LeagueEvents',
  fields: {
    buyTicketsURL: { type: GraphQLString },
    cityId: { type: GraphQLInt },
    dateTime: { type: GraphQLString },
    dateTimeStamp: { type: GraphQLString },
    eventId: { type: GraphQLInt },
    eventName: { type: GraphQLString },
    eventImage: { type: GraphQLString },
    headline: { type: GraphQLString },
    isFuture: { type: GraphQLBoolean },
    niceWhen: { type: GraphQLString },
    priceFrom: { type: GraphQLInt },
    sportIcon: { type: GraphQLString },
    sportName: { type: GraphQLString },
    sportId: { type: GraphQLInt },
    teamA: { type: GraphQLString },
    teamB: { type: GraphQLString },
    timelineItemType: { type: GraphQLString },
    venueWordpressID: { type: GraphQLInt },
    venue: { type: VenueDetails },
    venueid: { type: GraphQLInt },
  },
});

export default leagueEvents;
