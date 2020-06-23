import { get } from 'lodash';

import HttpClient from '../tools/http-client';
import { getAuthOption } from '../tools/auth-header';

const { SWIAM_API_V3, SWIAM_SHOP_API_KEY } = process.env;

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
    .then(res => res.data)
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

const getCartId = () => {
  const url = `${SWIAM_API_V3}/shop/carts`;

  const data = JSON.stringify({
    displayCurrency: 'AUD', // TODO: get the currency display from user agent
  });

  const http = HttpClient.getHttpClient();
  return http
    .post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': SWIAM_SHOP_API_KEY, // it uses api-key instead of token for authentication
      },
    })
    .then(res => {
      console.log('getCartId', res);
      console.log('getCartId.data', res.data);
      return res.data;
    })
    .catch(error => {
      logger.error(`Error in Shop Service - getCartId( `, error.message);
      console.log('____getCartId_____ error', error);

      return null;
    });
};

const getCart = (cartId, currency = 'AUD') => {
  const url = `${SWIAM_API_V3}/shop/carts/${cartId}?currency=${currency}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': SWIAM_SHOP_API_KEY, // it uses api-key instead of token for authentication
      },
    })
    .then(res => {
      console.log('getCart', res.data);
      return res.data;
    })
    .catch(error => {
      logger.error(`Error in Shop Service - getCart( `, error.message);
      console.log('____getCart_____ error', error);

      return null;
    });
};

const setCustomerInfo = (
  cartId,
  firstName,
  lastName,
  ticketingEmail,
  phone
) => {
  const url = `${SWIAM_API_V3}/shop/carts/${cartId}/customerInfo`;

  const data = JSON.stringify({
    phone,
    email: ticketingEmail,
    ticketingEmail,
    firstnames: firstName,
    surname: lastName,
  });

  const http = HttpClient.getHttpClient();
  return http
    .put(url, data, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': SWIAM_SHOP_API_KEY, // it uses api-key instead of token for authentication
      },
    })
    .then(res => {
      const customerInfo = get(res, 'data.customerInfo', {});
      // TODO: remove console.log when response is stable
      console.log('setCustomerInfo response ------------------------');
      console.log('setCustomerInfo', customerInfo);
      console.log('setCustomerInfo response ------------------------');
      return customerInfo;
    })
    .catch(error => {
      logger.error(`Error in Shop Service - setCustomerInfo( `, error.message);
      console.log('____setCustomerInfo_____ error', error);

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

const getPaymentPublicKey = currency => {
  const url = `${SWIAM_API_V3}/shop/payments/stripe/currencies/${currency}/publickey`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, {
      headers: {
        'api-key': SWIAM_SHOP_API_KEY, // it uses api-key instead of token for authentication
      },
    })
    .then(res => {
      console.log('*************getPaymentPublicKey', res);
      return res.data;
    })
    .catch(error => {
      logger.error(
        `Error in Shop Service - getPaymentPublicKey( `,
        error.message
      );
      console.log('____getPaymentPublicKey_____ error', error);

      return null;
    });
};

export {
  getProductIdByEventId,
  getCartId,
  getCart,
  getPaymentPublicKey,
  deleteItemFromCartById,
  setPayment,
  setCustomerInfo,
};
