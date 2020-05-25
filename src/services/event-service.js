import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { SWIAM_API_V2 } = process.env;

export const getEventById = (eventId, token) => {
  const url = `${SWIAM_API_V2}/event?eventid=${eventId}&ticketApi=true`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data)
    .catch(error => {
      logger.error(
        `Error in Event Service - getEventById() - for id: ${eventId}`,
        error.message
      );
      return null;
    });
};
