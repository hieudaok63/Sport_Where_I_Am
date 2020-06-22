import HttpClient from '../tools/http-client';
import { getAuthOption } from '../tools/auth-header';

const { SWIAM_API_V2 } = process.env;

const getMe = token => {
  const url = `${SWIAM_API_V2}/me`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data)
    .catch(error => {
      logger.error(`Error in Service - getMe()`, error.message);
      console.log('Me error_________', error);
      return null;
    });
};

export { getMe };
