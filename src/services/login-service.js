import HttpClient from '../tools/http-client';

const { BASE_API_V2 } = process.env;

const getLoginWithEmail = (email, password) => {
  // They use email as username
  const url = `${BASE_API_V2}/v2/login?username=${email}&password=${password}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url)
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
