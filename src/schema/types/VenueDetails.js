import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } from 'graphql';
import Coordinates from './Coordinates';

const VenueDetails = new GraphQLObjectType({
  name: 'VenueDetails',
  fields: {
    photoURL: { type: GraphQLString },
    venueid: { type: GraphQLID },
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
