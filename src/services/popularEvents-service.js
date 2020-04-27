import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { BASE_API_V2 } = process.env;

export const getAllPopularEvents = token => {
  const url = `${BASE_API_V2}/cms/v1/getPopularEvents`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in Sport Service - getPopularEvents() - `,
        error.message
      );
      return null;
    });
};
