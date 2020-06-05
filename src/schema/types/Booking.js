import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} from 'graphql';

const Ticket = new GraphQLObjectType({
  name: 'Ticket',
  fields: {
    id: { type: GraphQLString },
    fullName: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

const Booking = new GraphQLObjectType({
  name: 'Booking',
  fields: {
    bookingId: { type: GraphQLString },
    bookerFullName: { type: GraphQLString },
    bookerEmail: { type: GraphQLString },
    ticketClassID: { type: GraphQLInt },
    ticketDeliveryAddress: { type: GraphQLString },
    numberOfTickets: { type: GraphQLInt },
    tickets: { type: GraphQLList(Ticket) },
    eventID: { type: GraphQLString },
    eventDate: { type: GraphQLString },
    eventName: { type: GraphQLString },
    ticketDescription: { type: GraphQLString },
    venueName: { type: GraphQLString },
    venueAddress: { type: GraphQLString },
  },
});

export default Booking;
