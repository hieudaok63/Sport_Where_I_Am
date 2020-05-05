import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import Coordinates from './Coordinates';

const VenueDetails = new GraphQLObjectType({
  name: 'VenueDetails',
  fields: {
    photoURL: { type: GraphQLString },
    venueid: { type: GraphQLInt },
    venueWordpressID: { type: GraphQLInt },
    venueName: { type: GraphQLString },
    venueAddress: { type: GraphQLString },
    address: { type: GraphQLString },
    cityid: { type: GraphQLInt },
    coOrdinates: { type: Coordinates },
    venueDescription: { type: GraphQLString },
    timelineItemType: { type: GraphQLString },
  },
});

export default VenueDetails;
