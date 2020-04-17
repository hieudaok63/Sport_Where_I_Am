import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';
import { getPaginatedItems } from '../tools/pagination';

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

export const getAllCities = ({ offset, limit }, token) => {
  const url = `${BASE_API}/v3i/cities`;
  console.log('========== BASE API ==========');
  console.log(url);

  const http = HttpClient.getHttpClient(3000);
  return http
    .get(url, token && getAuthOption(token))
    .then(res => getPaginatedItems(res.data, offset, limit).data)
    .catch(error => {
      logger.error(`Error in City Service - getAllCities() - `, error.message);
      return null;
    });
};
