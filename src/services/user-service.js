import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { BASE_API } = process.env;

export const getUserById = (userId, token) => {
  const strUserId = userId && userId.toString();
  const url = `${BASE_API}/user-test/${strUserId}`;

  const http = HttpClient.getHttpClient(3000);
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data)
    .catch(error => {
      logger.error(
        `Error in User Service - getUserById() for user: ${userId} `,
        error.message
      );
      return null;
    });
};

export const getAllUsers = token => {
  const url = `${BASE_API}/user-test`;

  const http = HttpClient.getHttpClient(3000);
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data)
    .catch(error => {
      logger.error(`Error in User Service - getAllUsers() - `, error.message);
      return null;
    });
};

export default getUserById;
