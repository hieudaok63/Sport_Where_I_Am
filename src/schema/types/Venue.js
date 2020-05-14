import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
} from 'graphql';
import Event from './EventDetails';

const Venue = new GraphQLObjectType({
  name: 'Venue',
  fields: {
    photoURL: { type: GraphQLString },
    venueid: { type: GraphQLInt },
    venueWordpressID: { type: GraphQLInt },
    venueName: { type: GraphQLString },
    venueAddress: { type: GraphQLString },
    address: { type: GraphQLString },
    cityid: { type: GraphQLInt },
    coOrdinates: {
      latitude: { type: GraphQLFloat },
      longitude: { type: GraphQLFloat },
    },
    venueDescription: { type: GraphQLString },
    events: { type: GraphQLList(Event) },
  },
});

export default Venue;
