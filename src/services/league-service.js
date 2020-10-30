import HttpClient from '../tools/http-client';
import { getAuthOption } from '../tools/auth-header';

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
        `Error in League Service - getLeagueInfo() - leagueId:${leagueId}`,
        error.message
      );
      return null;
    });
};

export const getLeagueInfoByAbbreviation = (token, leagueAbbreviation) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/league/${leagueAbbreviation}/infoByAbbreviation`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in League Service - getLeagueInfoByAbbreviation() - leagueAbbreviation:${leagueAbbreviation}`,
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

export const getLeaguesByCityId = (token, cityId) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/${cityId}/leagues`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in League Service - getLeaguesByCityId() - `,
        error.message
      );
      return null;
    });
};

export const getLeagueTeams = (token, leagueId) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/league/${leagueId}/teams`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in League Service - getLeagueTeams() - `,
        error.message
      );
      return null;
    });
};

export const getTopLeagues = (token, leagueId) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/homepage/topSportLeagues`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in League Service - getTopLeagues() - `,
        error.message
      );
      return null;
    });
};

export default { getAllLeagues, getLeagueInfo, getLeagueVideos, getTopLeagues, getLeaguesByCityId };
