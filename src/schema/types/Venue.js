import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
} from 'graphql';
import Event from './EventDetails';
import Coordinates from './Coordinates';

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
    coOrdinates: { type: Coordinates },
    venueDescription: { type: GraphQLString },
    events: { type: GraphQLList(Event) },
  },
});

export default Venue;
