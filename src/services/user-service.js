import HttpClient from '../tools/http-client';
import { ApolloError } from 'apollo-server';
import { getAuthOption } from '../tools/auth-header';

const { SWIAM_API_V2, SWIAM_SHOP_API_KEY } = process.env;

const getMe = token => {
  const url = `${SWIAM_API_V2}/me?userToken=${token}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url)
    .then(res => res.data)
    .catch(error => {
      logger.error(`Error in Service - getMe()`, error.message);
      console.log('Me error_________', error);
      return null;
    });
};

const register = ({ email, firstName, password, surnameName, username }) => {
  const url = `${SWIAM_API_V2}/register?email=${email}&firstName=${firstName}&password=${password}&surnameName=${surnameName}&tsandcs=true&username=${username}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, {
      // API takes ages to return the register
      // We need to provide a long timeout, otherwise it will break
      timeout: 500000,
      headers: {
        'api-key': SWIAM_SHOP_API_KEY,
      },
    })
    .then(res => res.data)
    .catch(error => {
      logger.error(`Error in Service - register()`, error);
      throw new ApolloError(error);
    });
};

export { getMe, register };
