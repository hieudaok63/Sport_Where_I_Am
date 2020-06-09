import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { SWIAM_API, SWIAM_API_V2, SWIAM_OPENAPI } = process.env;

export const getAllLeagues = token => {
  const url = `${SWIAM_OPENAPI}/cms/v1/leagues`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in League Service - getAllHotels() - `,
        error.message
      );
      return null;
    });
};

export const getLeagueInfo = (token, leagueId) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/league/${leagueId}/info`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in League Service - getLeagueInfo() - `,
        error.message
      );
      return null;
    });
};

export const getLeagueVideos = (token, leagueId) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/league/${leagueId}/videos`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in League Service - getLeagueVideos() - `,
        error.message
      );
      return null;
    });
};

export default { getAllLeagues, getLeagueInfo, getLeagueVideos };
