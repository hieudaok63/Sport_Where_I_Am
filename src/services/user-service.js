import HttpClient from '../tools/http-client';
import { ApolloError } from 'apollo-server';

const {
  SWIAM_API_V2,
  SWIAM_API,
  SWIAM_SHOP_API_KEY,
  SWIAM_API_V3,
} = process.env;

const getMe = token => {
  const url = `${SWIAM_API_V2}/me?userToken=${token}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url)
    .then(res => res.data)
    .catch(error => {
      logger.error(`Error in Service - getMe()`, error.message);
      return null;
    });
};

const getUpComingEvents = token => {
  const url = `${SWIAM_API_V3}/shop/users/${token}/carts`;

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
      logger.error(`Error in Service - getMe()`, error.message);

      return null;
    });
};

const register = ({ email, firstName, password, lastName }) => {
  const url = `${SWIAM_API}/register?email=${email}&firstName=${firstName}&password=${password}&surnameName=${lastName}&tsandcs=true`;

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
    .then(res => ({
      ...res.data,
      wpid: res.data.wpid || res.data.wpID,
    }))
    .catch(error => {
      logger.error(`Error in Service - register()`, error);
      throw new ApolloError(error);
    });
};

export { getMe, register, getUpComingEvents };
