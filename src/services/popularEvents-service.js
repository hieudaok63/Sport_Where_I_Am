import HttpClient from '../tools/http-client';
import { getAuthOption } from '../tools/auth-header';

const { SWIAM_OPENAPI } = process.env;

// eslint-disable-next-line import/prefer-default-export
export const getAllPopularEvents = token => {
  const url = `${SWIAM_OPENAPI}/cms/v1/popularEvents`;
  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => {
      const result = res.data.data;
      result.forEach(element => {
        if (!element.eventDateTime) {
          return result;
        }
      });
      result.sort(
        (a, b) => new Date(a.eventDateTime) - new Date(b.eventDateTime)
      );
      return result;
    })
    .catch(error => {
      logger.error(
        `Error in Sport Service - getPopularEvents() - `,
        error.message
      );
      return null;
    });
};
