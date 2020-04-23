import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { BASE_API } = process.env;

export const getCityById = (cityId, token) => {
  const url = `${BASE_API}/v3i/cities/${cityId}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data)
    .catch(error => {
      logger.error(
        `Error in City Service - getCityById() for city number: ${cityId} `,
        error.message
      );
      return null;
    });
};

export const getAllCities = token => {
  const url = `${BASE_API}/v3i/cities`;

  const http = HttpClient.getHttpClient(3000);
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data)
    .catch(error => {
      logger.error(`Error in City Service - getAllCities() - `, error.message);
      return null;
    });
};
