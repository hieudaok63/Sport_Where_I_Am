import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} from 'graphql';
import Event from './EventDetails';
import VenueDetails from './VenueDetails';

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

export const VenueImportantInformation = new GraphQLObjectType({
  name: 'VenueImportantInformation',
  fields: {
    infoId: { type: GraphQLString },
    venueId: { type: GraphQLInt },
    label: { type: GraphQLString },
    information: { type: GraphQLString },
    version: { type: GraphQLInt },
  },
});

export default Venue;
