import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { SWIAM_OPENAPI } = process.env;

export const getNearbyEventsByCityId = (cityId, token) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/nearbyEvents?cityId=${cityId}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in Events Service - nearbyEventsByCityId() - `,
        error.message
      );
      return null;
    });
};
