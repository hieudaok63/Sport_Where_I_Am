import HttpClient from '../tools/http-client';

const { SWIAM_API_V2 } = process.env;

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

export { getLoginWithEmail };
