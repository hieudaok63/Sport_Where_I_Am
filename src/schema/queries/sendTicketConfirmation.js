import { GraphQLString } from 'graphql';
import BookingCrew from '../types/BookingCrew';
import { sendEmailToBookingCrew } from '../../services/booking-service';

const sendTicketConfirmation = {
  type: BookingCrew,
  args: {
    bookingId: { type: GraphQLString },
    email: { type: GraphQLString },
    fullName: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { bookingId, email, fullName } = args;
    if (bookingId && email && fullName) {
      return sendEmailToBookingCrew(bookingId, email, fullName);
    }
    return null;
  },
};

export { sendTicketConfirmation };
