import HttpClient from '../tools/http-client';

const {
  UNIVERSAL_API,
  SWIAM_UNIVERSAL_API_KEY,
  UNIVERSAL_USER_EMAIL,
} = process.env;

const getAccessToken = async () => {
  console.log('=== UNIVERSAL ===');
  const url = `${UNIVERSAL_API}/getaccesstoken`;
  const http = HttpClient.getHttpClient();

  return http
    .get(url, {
      headers: {
        Accept: 'application/json',
        'api-token': SWIAM_UNIVERSAL_API_KEY,
        'user-email': UNIVERSAL_USER_EMAIL,
      },
    })
    .then(res => res.data)
    .catch(error => {
      logger.error(`Error in Universal Service -  `, error.message);
      return null;
    });
};

const getCountries = async () => {
  const url = `${UNIVERSAL_API}/countries/`;
  const http = HttpClient.getHttpClient();
  const authToken = await getAccessToken();

  return http
    .get(url, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${authToken.auth_token}`,
      },
    })
    .then(res => res.data)
    .catch(error => {
      logger.error(
        `Error in Countries Service - getCountries( `,
        error.message
      );
      console.log('____getCountries_____ error', error.message);

      return null;
    });
};

const getStates = async country => {
  const url = `${UNIVERSAL_API}/states/${country}`;
  const http = HttpClient.getHttpClient();
  const authToken = await getAccessToken();

  return http
    .get(url, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${authToken.auth_token}`,
      },
    })
    .then(res => res.data)
    .catch(error => {
      logger.error(
        `Error in Countries Service - getCountries( `,
        error.message
      );
      console.log('____getCountries_____ error', error.message);

      return null;
    });
};

const getCities = async state => {
  const url = `${UNIVERSAL_API}/cities/${state}`;
  const http = HttpClient.getHttpClient();
  const authToken = await getAccessToken();

  return http
    .get(url, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${authToken.auth_token}`,
      },
    })
    .then(res => res.data)
    .catch(error => {
      logger.error(
        `Error in Countries Service - getCountries( `,
        error.message
      );
      console.log('____getCountries_____ error', error.message);

      return null;
    });
};

export { getAccessToken, getCountries, getStates, getCities };
