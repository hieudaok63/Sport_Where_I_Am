import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { SWIAM_API_V3 } = process.env;

const getProductIdByEventId = (
  eventId,
  token,
  asUrl = false,
  currency = 'AUD',
  cartId = 'GEJKL8' // TODO: See how this is received
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

const setPayment = (data, cartId, token) => {
  const url = `${SWIAM_API_V3}/shop/carts/${cartId}/payment`;
  // https://api.sportswhereiam.com/swiam-api/v3/shop/carts/[:id]/payment

  const http = HttpClient.getHttpClient();
  return http
    .put(url, data, token && getAuthOption(token))
    .then(res => {
      console.log('setPayment', res);
      return res.data;
    })
    .catch(error => {
      logger.error(`Error in Shop Service - setPayment( `, error.message);
      console.log('____setPayment_____ error', error);

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

const getCart = (cartId = 'GEJKL8', currency = 'AUD', token) => {
  const url = `${SWIAM_API_V3}/shop/carts/${cartId}?currency=${currency}`;
  // https://api.sportswhereiam.com/swiam-api/v3/shop/carts/GEJKL8?currency=%22AUD%22%20

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => {
      console.log('getCart', res);
      return res.data;
    })
    .catch(error => {
      logger.error(`Error in Shop Service - getCart( `, error.message);
      console.log('____getCart_____ error', error);

      return null;
    });
};

const deleteItemFromCartById = (cartId = 'GEJKL8', lineItemId, token) => {
  const url = `${SWIAM_API_V3}/shop/carts/${cartId}/lineitems/${lineItemId}`;

  const http = HttpClient.getHttpClient();
  return http
    .delete(url, token && getAuthOption(token))
    .then(res => {
      console.log('deleteItemFromCartById', res);
      return res.data;
    })
    .catch(error => {
      logger.error(
        `Error in Shop Service - deleteItemFromCartById( `,
        error.message
      );
      console.log('____deleteItemFromCartById_____ error', error);

      return null;
    });
};

const getStripePublicKey = (currency = 'AUD', token) => {
  const url = `${SWIAM_API_V3}/shop/payments/stripe/currencies/${currency}/publickey`;
  // https://api.sportswhereiam.com/swiam-api/v3/shop/payments/stripe/currencies/AUD/publickey

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => {
      console.log('getStripePublicKey', res);
      return res.data;
    })
    .catch(error => {
      logger.error(
        `Error in Shop Service - getStripePublicKey( `,
        error.message
      );
      console.log('____getStripePublicKey_____ error', error);

      return null;
    });
};

export {
  getProductIdByEventId,
  getCartId,
  getCart,
  getStripePublicKey,
  deleteItemFromCartById,
  setPayment,
};
