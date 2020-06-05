import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { SWIAM_API_V3 } = process.env;

const getProductIdByEventId = (
  eventId,
  token,
  asUrl = false,
  currency = 'AUD',
  cartId = '123' // TODO: See how this is received
) => {
  const url = `${SWIAM_API_V3}/shop/events/${eventId}/products?asUrl=${asUrl}&currency=${currency}&cartId=${cartId}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => {
      return res.data;
    })
    .catch(error => {
      logger.error(
        `Error in Shop Service - getProductIdByEventId() for event id: ${eventId} `,
        error.message
      );
      console.log('____getProductIdByEventId_____ error', error);

      return null;
    });
};

const getCartId = token => {
  const url = `${SWIAM_API_V3}/shop/carts`;
  // https://apidev2.sportswhereiam.com/swiam-api/v3/shop/carts

  const http = HttpClient.getHttpClient();
  return http
    .post(url, token && getAuthOption(token))
    .then(res => {
      console.log('getCartId', res);
      return res.data;
    })
    .catch(error => {
      logger.error(`Error in Shop Service - getCartId( `, error.message);
      console.log('____getCartId_____ error', error);

      return null;
    });
};

export { getProductIdByEventId, getCartId };
