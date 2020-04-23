import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { BASE_API_V2 } = process.env;

export const getAllSports = token => {
  const url = `${BASE_API_V2}/cms/v1/getSports`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(`Error in Sport Service - getAllSports() - `, error.message);
      return null;
    });
};
