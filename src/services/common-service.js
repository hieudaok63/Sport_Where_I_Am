import HttpClient from '../tools/http-client';
import { getAuthOption } from '../tools/auth-header';

const { SWIAM_OPENAPI } = process.env;

export const getObjectIdByName = (name, token) => {
  const parsedName = name && name.replace(/\s+/g, '-').toLowerCase();
  const url = `${SWIAM_OPENAPI}/cms/v1/objectIdByName/${parsedName}`;
  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => {
      return res && res.data;
    })
    .catch(error => {
      logger.error(
        `Error in Common Service - getObjectIdByName() for: ${name} `,
        error.message
      );
      return null;
    });
};
