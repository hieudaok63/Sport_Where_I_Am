import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';
import { getIncrementalItems } from '../tools/pagination';

const { BASE_API } = process.env;

export const getAllSports = ({ offset }, token) => {
  const url = `${BASE_API}/cms/v1/getSports`;

  const http = HttpClient.getHttpClient(3000);
  return http
    .get(url, token && getAuthOption(token))
    .then(res => getIncrementalItems(res.data.data, offset))
    .catch(error => {
      logger.error(`Error in Sport Service - getAllSports() - `, error.message);
      return null;
    });
};
