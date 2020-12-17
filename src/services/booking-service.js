const sendEmailToBookingCrew = (bookingId, email, fullName, mergeData) => {
  // TODO: Return the real API data (staging / prod)
  // TODO: Mock localhost response
  const promiseTimeout = time => () =>
    new Promise(resolve => setTimeout(resolve, time));

  return new Promise((resolve, reject) => {
    // Authenticate with API Key
    const createsend = require('createsend-node');
    const auth = { apiKey: '4c6f5c9c12a93ec5b7476c089e88ffc63e849a6b4dbd8a78' };
    const api = new createsend(auth);

    // Create a details object
    const details = {};

    // Add the unique identifier for the smart email
    details.smartEmailID = '1b739c3a-a5c2-4ad9-bb02-e7c7571233ef';

    // Add the 'To' email address
    details.to = `${fullName} <${email}>`;

    // Add mail merge variables
    details.data = JSON.parse(mergeData);

    // Send the smart email(and provide a callback function that takes an error and a response parameter)
    api.transactional.sendSmartEmail(details, (err, res) => {
      if (err) {
        logger.error(
          `Error in Booking Service - sendEmailToBookingCrew(): ${email}, ${fullName}`,
          error.message
        );
        console.log('login error_________', error);
        reject(error);
      } else {
        console.log(res);
        resolve({
          bookingId,
          id: email,
          fullName,
          email,
          hasSent: true,
        });
      }
    });
  });

  // return promiseTimeout(1000)()
  //   .then(() => ({
  //     bookingId,
  //     id: email,
  //     fullName,
  //     email,
  //     hasSent: true,
  //   }))
  //   .catch(error => {
  //     logger.error(
  //       `Error in Booking Service - sendEmailToBookingCrew(): ${email}, ${fullName}`,
  //       error.message
  //     );
  //     console.log('login error_________', error);
  //     return null;
  //   });
};

export { sendEmailToBookingCrew };

const findBooking = (bookingId, email, fullName) => {
  // TODO: Return the real API data (staging / prod)
  // TODO: Mock localhost response
  const promiseTimeout = time => () =>
    new Promise(resolve => setTimeout(resolve, time));

  return promiseTimeout(300)()
    .then(() => ({
      bookingId,
      bookerFullName: fullName,
      bookerEmail: email,
      ticketClassID: 'ABC',
      ticketDeliveryAddress: '',
      numberOfTickets: 5,
      eventID: '1670',
      eventDate: '1591121741',
      eventName: 'New York Knicks vs. Chicago Bulls',
      ticketDescription: '',
      venueName: 'Madison Square Garden',
      venueAddress: '4 Pennsylvania Plaza, New York, NY 10001, United States',
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
