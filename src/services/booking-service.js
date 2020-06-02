const sendEmailToBookingCrew = (bookingId, email, fullName) => {
  // TODO: Return the real API data (staging / prod)
  // TODO: Mock localhost response
  const promiseTimeout = time => () =>
    new Promise(resolve => setTimeout(resolve, time));

  return promiseTimeout(3000)()
    .then(() => ({
      bookingId,
      id: email,
      fullName,
      email,
      hasSent: true,
    }))
    .catch(error => {
      logger.error(
        `Error in Booking Service - sendEmailToBookingCrew(): ${email}, ${fullName}`,
        error.message
      );
      console.log('login error_________', error);
      return null;
    });
};

export { sendEmailToBookingCrew };

const findBooking = (bookingId, email, fullName) => {
  // TODO: Return the real API data (staging / prod)
  // TODO: Mock localhost response
  const promiseTimeout = time => () =>
    new Promise(resolve => setTimeout(resolve, time));

  return promiseTimeout(3000)()
    .then(() => ({
      bookingId,
      buyerFullName: fullName,
      buyerEmail: email,
      tickets: [
        {
          id: '1',
          fullName,
          email,
        },
        {
          id: '2',
          fullName: null,
          email: null,
        },
        {
          id: '3',
          fullName: null,
          email: null,
        },
        {
          id: '4',
          fullName: null,
          email: null,
        },
        {
          id: '5',
          fullName: null,
          email: null,
        },
      ],
    }))
    .catch(error => {
      logger.error(
        `Error in Booking Service - findBooking(): ${email}, ${fullName}`,
        error.message
      );
      console.log('login error_________', error);
      return null;
    });
};

export { findBooking };

