import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';
import logger from '../tools/logger';

const { SWIAM_OPENAPI } = process.env;

export const getAllSports = token => {
  const url = `${SWIAM_OPENAPI}/cms/v1/sports`;
  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => {
      return res.data.data;
    })
    .catch(error => {
      logger.error(`Error in Sport Service - getAllSports() - `, error.message);
      return null;
    });
};
