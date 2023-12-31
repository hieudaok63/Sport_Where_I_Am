import HttpClient from '../tools/http-client';
import { getAuthOption } from '../tools/auth-header';

const { SWIAM_OPENAPI } = process.env;

export const getAllHotels = token => {
  const url = `${SWIAM_OPENAPI}/cms/v1/popularHotels`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(`Error in Hotel Service - getAllHotels() - `, error.message);
      return null;
    });
};

export const getPopularHotels = token => {
  const url = `${SWIAM_OPENAPI}/cms/v1/homepage/popularHotels`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in Hotel Service - getPopularHotels() - `,
        error.message
      );
      return null;
    });
};

export const getPopularHotelsByCityId = (cityId, token) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/${cityId}/popularHotels`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in Hotel Service - getPopularHotelsByCityId(cityId:${cityId})`,
        error.message
      );
      return null;
    });
};

export const getHotelDataById = (hotelId, token) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/hoteldata/${hotelId}`;
  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in Hotel Service - getHotelDataById(hotelId:${hotelId})`,
        error.message
      );
      return null;
    });
};

export const getHotelsForBigSportingEvents = token => {
  const url = `${SWIAM_OPENAPI}/cms/v1/hotelpage/hotelsForBigSportingEvents`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in Hotel Service - getHotelsForBigSportingEvents() - `,
        error.message
      );
      return null;
    });
};

export const getHotelsNearTheGame = (eventId, token) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/hotelpage/hotelsNearTheGame/${eventId}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in Hotel Service - getHotelsNearTheGame(eventId:${eventId})`,
        error.message
      );
      return null;
    });
};
