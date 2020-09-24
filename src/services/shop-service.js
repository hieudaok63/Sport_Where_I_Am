/* eslint-disable consistent-return */
import { get } from 'lodash';

import HttpClient from '../tools/http-client';
import { getAuthOption } from '../tools/auth-header';

const { SWIAM_API_V3, SWIAM_SHOP_API_KEY } = process.env;

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

const addProduct = ({
  cartId = 'GEJKL8',
  variantId,
  quantity,
  productId,
  currency,
}) => {
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

const setPayment = (cartId, currency, amount, transactionToken) => {
  const url = `${SWIAM_API_V3}/shop/carts/${cartId}/payment`;

  // TODO: remove this sample code when the api response becomes stable

  // [8:28 AM] def doStripePayment(cart: JsValue, stripeToken: String ) = {
  //   val cartId = (cart \ "id").as[String]
  //   val currency= ( cart \ "displayCurrency" ).as[String]
  //     val amount= (cart \ "total" \ "amount" ).as[Double]
  //     // NB this is "OnAccount" for this example, will need "Stripe" gateway in final version (OnAccount will be disabled)
  //     val payment= s"""{
  //       "currencyAmount": { "currency": "$currency","amount":$amount},
  //       "token": "$stripeToken",
  //       "gateway": "Stripe"
  //     }"""
  //     println(s"Payment $payment")
  //     await(ws.url(BaseUrl + s"/v3/shop/carts/$cartId/payment").withHttpHeaders("api-key" -> apiKey ).put(Json.parse(payment)))
  // }

  const data = JSON.stringify({
    currencyAmount: {
      currency,
      amount,
    },
    token: transactionToken,
    gateway: 'Stripe',
  });

  const http = HttpClient.getHttpClient();
  return http
    .put(url, data, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': SWIAM_SHOP_API_KEY, // it uses api-key instead of token for authentication
      },
    })
    .then(
      res =>
        // console.log('___________setPayment', res);
        res.data
    )
    .catch(error => {
      logger.error(`Error in Shop Service - setPayment( `, error.message);
      console.log('____setPayment_____ error', error.message);

      return null;
    });
};

export {
  getProductDataByEventId,
  getProductIdByEventId,
  getCartId,
  getCart,
  getPaymentPublicKey,
  addProduct,
  deleteItemFromCartById,
  setPayment,
  setCustomerInfo,
  removeProduct,
};
