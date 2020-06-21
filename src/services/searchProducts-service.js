import HttpClient from '../tools/http-client';

const { SWIAM_API_V3, SWIAM_SHOP_API_KEY } = process.env;

export const searchProductsQueryString = ({
  query,
  offset,
  limit,
  qualifiers,
  displayCurrency,
  cartId,
  from,
  vendor,
  to,
}) => {
  const url = `${SWIAM_API_V3}/shop/products?vendor=${vendor}&query=${query}&offset=${offset}&limit=${limit}&qualifiers=${qualifiers}&displayCurrency=${displayCurrency}&cartId=${cartId}&from=${from}&to=${to}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, {
      headers: {
        'api-key': SWIAM_SHOP_API_KEY,
      },
      timeout: 10000,
    })
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.log(error);
      logger.error(
        `Error in Hotel Search Service - searchProducts() - `,
        error.message
      );
      return null;
    });
};
