import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';
import logger from '../tools/logger';

const { SWIAM_OPENAPI, SWIAM_API, BASE_GQL_URL, PORT } = process.env;

export const getAllSports = token => {
  const url = `${SWIAM_OPENAPI}/cms/v1/getSports`;
  logger.info('SWIAM_OPENAPI: ');
  logger.info(SWIAM_OPENAPI);

  logger.info('SWIAM_API: ');
  logger.info(SWIAM_API);

  logger.info('BASE_GQL_URL: ');
  logger.info(BASE_GQL_URL);

  logger.info('PORT: ');
  logger.info(PORT);

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => {
      logger.info('Fetched result');
      logger.info(res);
      return res.data.data;
    })
    .catch(error => {
      logger.error(`Error in Sport Service - getAllSports() - `, error.message);
      logger.error(error);
      return null;
    });
};
