import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} from 'graphql';
import Event from './EventDetails';
import Coordinates from './Coordinates';
import VenueDetails from './VenueDetails';
import City from './City';

const Venue = new GraphQLObjectType({
  name: 'Venue',
  fields: {
    venue: { type: VenueDetails },
    events: { type: GraphQLList(Event) },
    // old
    // venueImage: { type: GraphQLString },
    // venueid: { type: GraphQLInt },
    // venueWordpressID: { type: GraphQLInt },
    // venueName: { type: GraphQLString },
    // venueAddress: { type: GraphQLString },
    // address: { type: GraphQLString },
    // cityid: { type: GraphQLInt },
    // coOrdinates: { type: Coordinates },
    // venueDescription: { type: GraphQLString },
  },
});

export default Venue;
