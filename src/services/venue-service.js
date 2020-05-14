import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { SWIAM_API_V2 } = process.env;

const getVenueByIdFromDate = (venueId, fromDate, token) => {
  const url = `${SWIAM_API_V2}/usingwpids/venues/${venueId}?dateTime=${fromDate || ''}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data)
    .catch(error => {
      logger.error(
        `Error in Venue Service - getVenueByIdFromDate() for venue number: ${venueId} `,
        error.message
      );
      return null;
    });
};

export default getVenueByIdFromDate;
