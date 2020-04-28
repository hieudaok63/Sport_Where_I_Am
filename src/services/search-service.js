import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { BASE_API_V2 } = process.env;

const getSearchByTerm = (searchTerm, token) => {
  const url = `${BASE_API_V2}/cms/v1/search/?searchTerm=${searchTerm}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data)
    .catch(error => {
      logger.error(
        `Error in Search Service - getSearchByTerm() for search term: ${searchTerm} `,
        error.message
      );
      return null;
    });
};

export { getSearchByTerm };

