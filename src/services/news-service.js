import HttpClient from '../tools/http-client';
import { getAuthOption } from '../tools/auth-header';

const { SWIAM_OPENAPI } = process.env;

export const getNewsData = (interestId, interestType, token) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/contentCarousel/${interestType}/${interestId}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(`Error in News Service - getNewsData() - `, error.message);
      return null;
    });
};

export const getInterestData = (interestId, interestType, token) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/contentCarousel/${interestType}/${interestId}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in News Service - getInterestData() - `,
        error.message
      );
      return null;
    });
};

export const getInterestQuestions = (interestId, interestType, token) => {
  // /cms/v1/questions/{interestType}/{id}
  const url = `${SWIAM_OPENAPI}/cms/v1/questions/${interestType}/${interestId}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in News Service - getInterestQuestions() - `,
        error.message
      );
      return null;
    });
};
