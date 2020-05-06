import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { SWIAM_API } = process.env;

export const getAllHotels = token => {
  const url = `${SWIAM_API}/cms/v1/getPopularHotel`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => res.data.data)
    .catch(error => {
      logger.error(`Error in Sport Service - getAllHotels() - `, error.message);
      return null;
    });
};
