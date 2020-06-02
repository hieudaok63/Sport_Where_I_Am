import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

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
    buyerFullName: { type: GraphQLString },
    buyerEmail: { type: GraphQLString },
    tickets: { type: GraphQLList(Ticket) },
  },
});

export default Booking;
