/* eslint-disable consistent-return */
import { get } from 'lodash';

import HttpClient from '../tools/http-client';
import { getAuthOption } from '../tools/auth-header';
const lookup = require('country-code-lookup');

const {
  SWIAM_API,
  SWIAM_OPENAPI,
  SWIAM_API_V3,
  SWIAM_SHOP_API_KEY,
} = process.env;

const MAIL_OPTION = 'MAIL';
const E_TICKET_OPTION = 'ETICKET';

const isInternationalDelivery = ticket =>
  ticket.shippingOptions[0].type === MAIL_OPTION;
const isMobileDelivery = ticket =>
  ticket.shippingOptions[0].type === E_TICKET_OPTION;

const getDeliveryAdress = (ticket, deliveryAdress) => {
  let address = deliveryAdress.local;

  if (isInternationalDelivery(ticket)) {
    address = deliveryAdress.international;
  } else if (isMobileDelivery(ticket)) {
    address = deliveryAdress.billing;
  }

  return {
    ...address,
    country: {
      ...address.country,
      code: lookup.byCountry(address.country.name).iso3,
    },
  };
};

const getProductsByEventId = eventId => {
  const url = `${SWIAM_API_V3}/shop/products/${eventId}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': SWIAM_SHOP_API_KEY, // it uses api-key instead of token for authentication
      },
    })
    .then(res => res.data)
    .catch(error => {
      logger.error(
        `Error in Shop Service - getProductsByEventId() for event id: ${eventId} `,
        error.message
      );
      console.log('____getProductsByEventId_____ error', error);
    });
};

const getHotelProductById = (startDate, endDate, qualifiers, hotelId) => {
  const url = `${SWIAM_API}/admin/enc?message=hb:${startDate}:${endDate}:${qualifiers}:${hotelId}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url)
    .then(res => getProductsByEventId(res.data))
    .catch(error => {
      logger.error(`Error in Shop Service - getEventId()`, error.message);
      console.log('____getEventId_____ error', error);
    });
};

const getProductDataByProductId = async (
  productId,
  currency,
  eventId,
  token
) => {
  const url = `${SWIAM_API_V3}/shop/products/${productId}?currency=${currency}`;

  const http = HttpClient.getHttpClient(5000);

  try {
    const response = await http.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': SWIAM_SHOP_API_KEY, // it uses api-key instead of token for authentication
      },
    });
    const data =
      (await response) &&
      response.data &&
      response.data.length &&
      response.data[0];

    return data;
  } catch (error) {
    console.log('Error: ');
    console.log(error);
    logger.error(
      `Error in Shop Service - getProductDataByProductId() for event id: ${eventId} and productId ${productId}`,
      error.message
    );
  }
};

const getProductIdByEventId = async (
  eventId,
  cartId,
  token,
  asUrl = false,
  currency = 'AUD'
) => {
  const url = `${SWIAM_API_V3}/shop/events/${eventId}/products?asUrl=${asUrl}&currency=${currency}&cartId=${cartId}`;
  const http = HttpClient.getHttpClient();
  try {
    const response = await http.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': SWIAM_SHOP_API_KEY, // it uses api-key instead of token for authentication
      },
    });
    const data = await response.data;
    return data;
  } catch (error) {
    logger.error(
      `Error in Shop Service - getProductIdByEventId() for event id: ${eventId} `,
      error.message
    );
  }
};

const getProductDataByEventId = async (
  eventId,
  cartId,
  token,
  asUrl = false,
  currency = 'AUD'
) => {
  const product = await getProductIdByEventId(
    eventId,
    cartId,
    token,
    asUrl,
    currency
  );
  console.log(product);
  const productId = product && product.length && product[0].value;
  const productData = await getProductDataByProductId(
    productId,
    currency,
    eventId,
    token
  );
  return productData;
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
    .then(res => res.data)
    .catch(error => {
      logger.error(`Error in Shop Service - getCart( `, error.message);
      console.log('____getCart_____ error', error.message);

      return null;
    });
};

const setCustomerInfo = async (
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
      return customerInfo;
    })
    .catch(error => {
      logger.error(`Error in Shop Service - setCustomerInfo( `, error.message);
      console.log('____setCustomerInfo_____ error', error.message);

      return null;
    });
};

const deleteItemFromCartById = (cartId = 'GEJKL8', lineItemId, token) => {
  const url = `${SWIAM_API_V3}/shop/carts/${cartId}/lineitems/${lineItemId}`;

  const http = HttpClient.getHttpClient();
  return http
    .delete(url, token && getAuthOption(token))
    .then(res => res.data)
    .catch(error => {
      logger.error(
        `Error in Shop Service - deleteItemFromCartById( `,
        error.message
      );
      console.log('____deleteItemFromCartById_____ error', error.message);

      return null;
    });
};

const addProduct = ({ cartId, variantId, quantity, productId, currency }) => {
  const url = `${SWIAM_API_V3}/shop/carts/${cartId}/lineitems`;
  const data = {
    productId,
    variantId,
    quantity,
    currency,
  };

  const http = HttpClient.getHttpClient();
  return http
    .post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': SWIAM_SHOP_API_KEY, // it uses api-key instead of token for authentication
      },
    })
    .then(res => res.data)
    .catch(error => {
      logger.error(
        `Error in Shop Service - addProduct() for productId ${productId}: `,
        error.message
      );

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
    .then(
      res =>
        // console.log('*************getPaymentPublicKey', res);
        res.data
    )
    .catch(error => {
      logger.error(
        `Error in Shop Service - getPaymentPublicKey( `,
        error.message
      );
      console.log('____getPaymentPublicKey_____ error', error);

      return null;
    });
};

const removeProduct = ({ cartId, lineItemId }) => {
  const url = `${SWIAM_API_V3}/shop/carts/${cartId}/lineitems/${lineItemId}`;
  const http = HttpClient.getHttpClient();

  return http
    .delete(url, {
      headers: {
        'api-key': SWIAM_SHOP_API_KEY,
      },
    })
    .then(res => res.data)
    .catch(error => {
      logger.error(`Error in Shop Service - removeProduct( `, error.message);
      console.log('____removeProduct_____ error', error.message);

      return null;
    });
};

// This call is required by the API for God knows what reason
const syncLineItems = async (cartId, firstName, lastName, email, phone) => {
  const url = `${SWIAM_API_V3}/shop/carts/${cartId}/customerInfo?syncLineItems=false`;
  const data = JSON.stringify({
    name: `${firstName} ${lastName}`,
    email,
    phone,
  });
  const http = HttpClient.getHttpClient();
  return http
    .put(url, data, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': SWIAM_SHOP_API_KEY, // it uses api-key instead of token for authentication
      },
    })
    .then(res => res.data)
    .catch(error => {
      logger.error(`Error in Shop Service - setPayment( `, error.message);
      console.log('____setPayment_____ error', error.message);

      return null;
    });
};

const setPayment = async ({
  cartId,
  currency,
  lineItems,
  cardholderName,
  amount,
  transactionToken,
  firstName,
  lastName,
  email,
  phone,
  typeTickets,
  deliveryAdress,
}) => {
  const http = HttpClient.getHttpClient(8000);
  const requestParameters = {
    headers: {
      'Content-Type': 'application/json',
      'api-key': SWIAM_SHOP_API_KEY, // it uses api-key instead of token for authentication
    },
  };

  await Promise.all(
    lineItems.map((item, index) =>
      http.put(
        `${SWIAM_API_V3}/shop/carts/${cartId}/lineitems/${
          item.id
        }/shippingOption`,
        {
          id: typeTickets[index],
        },
        requestParameters
      )
    )
  );

  await Promise.all(
    lineItems.map((item, index) =>
      http.put(
        `${SWIAM_API_V3}/shop/carts/${cartId}/lineitems/${
          item.id
        }/customerInfo`,
        {
          name: `${firstName} ${lastName}`,
          email: email,
          phone: phone,
          ticketingEmail: '',
          dob: '',
          addresses: [
            {
              ...getDeliveryAdress(item, deliveryAdress),
              attn: cardholderName,
              premise: '',
              purposes: ['SHIPPING'],
              phone,
            },
          ],
        },
        requestParameters
      )
    )
  );

  const data = JSON.stringify({
    currencyAmount: {
      currency,
      amount,
    },
    token: transactionToken,
    gateway: 'Stripe',
  });

  return syncLineItems(cartId, firstName, lastName, email, phone)
    .then(() => {
      const paymentUrl = `${SWIAM_API_V3}/shop/carts/${cartId}/payment`;

      return http
        .put(paymentUrl, data, requestParameters)
        .then(res => res.data)
        .catch(error => {
          logger.error(`Error in Shop Service - setPayment( `, error.message);
          console.log('____setPayment_____ error', error.message);

          return null;
        });
    })
    .catch(e => {
      console.log(
        `Error syncing line items before payment for cart id ${cartId}`
      );
      return null;
    });
};

const getMerchandiseByEventId = eventId => {
  const url = `${SWIAM_OPENAPI}/cms/v1/eventMerchandise/${eventId}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url)
    .then(res => res.data.data)
    .catch(error => {
      logger.error(
        `Error in Merchandise Service - getMerchandiseByEventId() for event ID: ${eventId}`,
        error.message
      );
      return null;
    });
};

export {
  getProductDataByEventId,
  getHotelProductById,
  getProductIdByEventId,
  getCartId,
  getCart,
  getPaymentPublicKey,
  addProduct,
  deleteItemFromCartById,
  setPayment,
  setCustomerInfo,
  removeProduct,
  getMerchandiseByEventId,
};
