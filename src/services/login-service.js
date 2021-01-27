import { ApolloError } from 'apollo-server';
import HttpClient from '../tools/http-client';

const { SWIAM_API_V2, SWIAM_API } = process.env;

const getLoginWithEmail = (username, password) => {
  const url = `${SWIAM_API_V2}/login`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, {
      params: {
        username,
        password,
      },
    })
    .then(res => res.data)
    .catch(error => {
      logger.error(
        `Error in Search Service - getLoginByEmail()`,
        error.message
      );
      console.log('login error_________', error);
      return null;
    });
};

const loginByUserName = (username, password) => {
  const url = `${SWIAM_API}/login`;
  const http = HttpClient.getHttpClient();

  return http
    .get(url, {
      params: {
        username,
        password,
      },
    })
    .then(res => ({
      ...res.data,
      wpid: res.data.wpid || res.data.wpID,
    }))
    .catch(error => {
      logger.error(
        `Error in Search Service - getLoginByEmail()`,
        error.message
      );
      console.log('login error_________', error);
      return null;
    });
};

const getLoginWithFacebook = ({ email, accessToken }) => {
  const url = `${SWIAM_API}/fblogin`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, { params: { email, access_token: accessToken } })
    .then(res => res.data)
    .catch(error => {
      console.log(error);
      logger.error(`Error in Service - login()[facebook]`, error);
      throw new ApolloError(error);
    });
};

const getLoginWithGoogle = ({ email, idToken }) => {
  const url = `${SWIAM_API}/googlelogin`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, { params: { email, id_token: idToken } })
    .then(res => res.data)
    .catch(error => {
      console.log(error);
      logger.error(`Error in Service - login()[google]`, error);
      throw new ApolloError(error);
    });
};

export {
  loginByUserName,
  getLoginWithEmail,
  getLoginWithFacebook,
  getLoginWithGoogle,
};
