import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';
import { getPaginatedItems } from '../tools/pagination';

const { BASE_API } = process.env;

export const getPopularById = (popularId, token) => {
  const url = `${BASE_API}/v3i/popular/${popularId}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data)
    .catch(error => {
      logger.error(
        `Error in Popular Service - getPopularById() for popular number: ${popularId} `,
        error.message
      );
      return null;
    });
};

export const getAllPopulars = ({ limit, offset }, token) => {
  const url = `${BASE_API}/v3i/popular`;

  const http = HttpClient.getHttpClient(3000);
  return http
    .get(url, token && getAuthOption(token))
    .then(res => getPaginatedItems(res.data, offset, limit).data)
    .catch(error => {
      logger.error(
        `Error in Popular Service - getAllPopulars() - `,
        error.message
      );
      return null;
    });
};
