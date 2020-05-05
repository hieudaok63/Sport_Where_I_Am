import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { BASE_API_V2 } = process.env;

const createSubscribe = (data, token) => {
  const url = `${BASE_API_V2}/cms/v1/subscribe`;

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
