import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
} from 'graphql';

const BookingCrew = new GraphQLObjectType({
  name: 'BookingCrew',
  fields: {
    id: { type: GraphQLID },
    bookingId: { type: GraphQLString },
    fullName: { type: GraphQLString },
    email: { type: GraphQLString },
    hasSent: { type: GraphQLBoolean },
  },
});

export default BookingCrew;
