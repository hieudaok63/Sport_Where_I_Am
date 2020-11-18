import HttpClient from '../tools/http-client';

const { SWIAM_API } = process.env;

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

export { loginByUserName };
