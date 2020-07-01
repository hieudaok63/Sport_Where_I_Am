import HttpClient from '../tools/http-client';
import { getAuthOption } from '../tools/auth-header';

const { SWIAM_API_V2 } = process.env;

const getMe = token => {
  const url = `${SWIAM_API_V2}/me`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data)
    .catch(error => {
      logger.error(`Error in Service - getMe()`, error.message);
      console.log('Me error_________', error);
      return null;
    });
};

const register = ({
  email,
  firstName,
  password,
  surnameName,
  tsandcs,
  username,
}) => {
  const url = `${SWIAM_API_V2}/register?email=${email}&firstName=${firstName}&password=${password}&surnameName=${surnameName}&tsandcs=${tsandcs}&username=${username}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, {
      timeout: 10000,
    })
    .then(res => res.data)
    .catch(error => {
      logger.error(`Error in Service - register()`, error.message);
      console.log('Register error_________', error);
      return null;
    });
};

export { getMe, register };
