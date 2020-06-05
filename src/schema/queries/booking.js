import { GraphQLString } from 'graphql';
import Booking from '../types/Booking';
import { findBooking } from '../../services/booking-service';

const getBooking = {
  type: Booking,
  args: {
    bookingId: { type: GraphQLString },
    email: { type: GraphQLString },
    fullName: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { bookingId, email, fullName } = args;
    if (bookingId && email && fullName) {
      return findBooking(bookingId, email, fullName);
    }
    return null;
  },
};

export { getBooking };
