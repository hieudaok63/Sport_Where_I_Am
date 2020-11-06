import HttpClient from '../tools/http-client';
import { getAuthOption } from '../tools/auth-header';

const { SWIAM_OPENAPI } = process.env;

export const getNearbyEventsByCityId = (cityId, token) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/nearbyEvents?cityId=${cityId}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data.slice(0, 5))
    .catch(error => {
      logger.error(
        `Error in Nearby Events Service - nearbyEventsByCityId() - `,
        error.message
      );
      return null;
    });
};

export const getEventsNearHotel = (hotelId, token) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/eventsNearHotel/${hotelId}`;
  console.log('URL', url, hotelId);
  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => {
      console.log('GQL DATA', res.data);
      return res.data.data;
    })
    .catch(error => {
      logger.error(
        `Error in Nearby Events Service - getEventsNearHotel`,
        error.message
      );
      return null;
    });
};
