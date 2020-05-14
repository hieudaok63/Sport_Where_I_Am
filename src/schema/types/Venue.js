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
    // venueid: 440,
    // venueWordpressID: 13798,
    // venueName: 'Arthur Ashe Stadium',
    // venueAddress: 'One Flushing Meadows Corona Park Road',
    // address: 'One Flushing Meadows Corona Park Road',
    // cityid: 9,
    // coOrdinates: { latitude: 40.7518086, longitude: -73.85430450000001 },
    // venueDescription:
    events: { type: GraphqlList(Event) },
  },
});

export default Venue;
