import HttpClient from '../tools/http-client';
import { getAuthOption } from '../tools/auth-header';

const { SWIAM_API_V2, SWIAM_OPENAPI } = process.env;

export const getEventById = (eventId, token) => {
  const url = `${SWIAM_API_V2}/event?eventid=${eventId}&ticketApi=true`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => {
      return res.data;
    })
    .catch(error => {
      logger.error(
        `Error in Event Service - getEventById() - for id: ${eventId}`,
        error.message
      );
      return null;
    });
};

export const getEventDataById = (eventId, token) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/eventData/${eventId}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => {
      console.log(res.data.data);
      return res.data.data;
    })
    .catch(error => {
      logger.error(
        `Error in Event Service - getEventById() - for id: ${eventId}`,
        error.message
      );
      return null;
    });
};
