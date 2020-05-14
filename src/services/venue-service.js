import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { SWIAM_API, SWIAM_API_V2 } = process.env;

const getVenueById = (venueId, token) => {
  const url = `${SWIAM_API}/v3i/venue/${venueId}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data)
    .catch(error => {
      logger.error(
        `Error in Venue Service - getVenueById() for venue number: ${venueId} `,
        error.message
      );
      return null;
    });
};

export default getVenueById;
