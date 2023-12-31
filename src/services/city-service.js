import HttpClient from '../tools/http-client';
import { getAuthOption } from '../tools/auth-header';

const { SWIAM_API_V2, SWIAM_API_V3I, SWIAM_OPENAPI } = process.env;

export const getCityById = (cityId, token) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/city/${cityId}/info`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res && res.data && res.data.data)
    .catch(error => {
      logger.error(
        `Error in City Service - getCityById() for city number: ${cityId} `,
        error.message
      );
      return null;
    });
};

export const getCityDetailsByIdFromDate = (cityId, fromDate, token) => {
  // fromDate must me format YYYY-MM-DD eg 2020-05-30
  const url = `${SWIAM_API_V2}/usingwpids/cities/${cityId}?dateTime=${fromDate ||
    ''}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data)
    .catch(error => {
      logger.error(
        `Error in City Service - getCityDetailsById() for city id: ${cityId} `,
        error.message
      );
      return null;
    });
};

export const getPopularSportingCities = token => {
  const url = `${SWIAM_OPENAPI}/cms/v1/hotelpage/mostPopularSportsCities`;

  const http = HttpClient.getHttpClient(3000);
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in City Service - getPopularSportingCities() - `,
        error.message
      );
      return null;
    });
};

export const getAllCities = token => {
  const url = `${SWIAM_API_V3I}/cities`;
  const http = HttpClient.getHttpClient(3000);
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data)
    .catch(error => {
      logger.error(`Error in City Service - getAllCities() - `, error.message);
      return null;
    });
};

export const getTopCities = () => {
  const url = `${SWIAM_OPENAPI}/cms/v1/homepage/topCities`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url)
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in Sport Service - popularExperiences() - `,
        error.message
      );
      return null;
    });
};
