import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { SWIAM_API, SWIAM_API_V2 } = process.env;

const getAllLeagues = token => {
  const url = `${SWIAM_API}/cms/v1/get-Leagues`;
  console.log('========== BASE API ==========');
  console.log(url);

  const http = HttpClient.getHttpClient(3000);
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data)
    .catch(error => {
      logger.error(`Error in City Service - getAllVenues() - `, error.message);
      return null;
    });
};

export default getAllLeagues;
