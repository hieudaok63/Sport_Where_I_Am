import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { SWIAM_OPENAPI } = process.env;

const getTeamById = (teamId, token) => {
  const url = `${SWIAM_OPENAPI}/cms/v1/team/${teamId}/info`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in Team Service - getTeamById() for team number: ${teamId} `,
        error.message
      );
      return null;
    });
};

export default getTeamById;
