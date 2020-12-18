import cookie from 'cookie';
import { get } from 'lodash';

const getToken = req => {
  // Parse the cookies on the request
  const cookies = cookie.parse(req.headers['x-cookie'] || '');

  // Get the visitor Token set in the cookie
  const token = JSON.parse(get(cookies, 'userData', '{}')).userToken;

  return token;
};

export default getToken;
