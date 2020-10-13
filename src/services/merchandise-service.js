import HttpClient from '../tools/http-client';
import { getAuthOption } from '../tools/auth-header';

const { SWIAM_OPENAPI } = process.env;

const getMerchandiseByEventId = (eventId, token) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/eventmerchandise/${eventId}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in Merchandise Service - getMerchandiseByEventId() for event ID: ${eventId}`,
        error.message
      );
      return null;
    });
};

export default getMerchandiseByEventId;
