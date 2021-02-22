import HttpClient from '../tools/http-client';
import { getAuthOption } from '../tools/auth-header';

const { SWIAM_OPENAPI } = process.env;

const getSearchByTerm = (searchTerm, useHotelIDs, token) => {
  const url = useHotelIDs
    ? `${SWIAM_OPENAPI}/cms/v1/lookupCity/?searchTerm=${searchTerm}`
    : `${SWIAM_OPENAPI}/cms/v1/search/?searchTerm=${searchTerm}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in Search Service - getSearchByTerm() for search term: ${searchTerm} `,
        error.message
      );
      return null;
    });
};

export { getSearchByTerm };
