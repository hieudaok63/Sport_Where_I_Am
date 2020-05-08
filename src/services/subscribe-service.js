import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { SWIAM_OPENAPI } = process.env;

const createSubscribe = (data, token) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/subscribe`;

  const http = HttpClient.getHttpClient();

  return http
    .post(url, data, token && getAuthOption(token))
    .then(() => data)
    .catch(error => {
      logger.error(
        `Error in Subscribe Service - createSubscribe() - `,
        error.message
      );
      return null;
    });
};

export { createSubscribe };
