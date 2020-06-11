import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { SWIAM_OPENAPI } = process.env;

export const getNewsData = (interestId, interestType, token) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/news/${interestType}/${interestId}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(`Error in News Service - getNews() - `, error.message);
      return null;
    });
};

export default getNewsData;
