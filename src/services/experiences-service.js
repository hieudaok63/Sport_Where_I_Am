import HttpClient from '../tools/http-client';
import { getAuthOption } from '../tools/auth-header';

const { SWIAM_OPENAPI } = process.env;

export const getAllExperiences = token => {
  const url = `${SWIAM_OPENAPI}/cms/v1/popularExperiences`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in Sport Service - popularExperiences() - `,
        error.message
      );
      return null;
    });
};
