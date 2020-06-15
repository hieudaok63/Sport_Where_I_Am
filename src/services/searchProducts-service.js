import HttpClient from '../tools/http-client';
import getAuthOption from '../tools/auth-header';

const { SWIAM_OPENAPI } = process.env;

export const searchProductsQueryString = (
  { vendor, query, offset, limit, qualifiers, displayCurrency, cartId },
  token
) => {
  const url = `${SWIAM_OPENAPI}/v3/searchProducts/?vendor=${vendor}&query=${query}&offset=${offset}&limit=${limit}&qualifiers=${qualifiers}&displayCurrency=${displayCurrency}&cartId=${cartId}`;

  const http = HttpClient.getHttpClient();
  return http
    .get(url, token && getAuthOption(token))
    .then(res => {
      console.log(res.data);
      return res.data.data;
    })
    .catch(error => {
      logger.error(
        `Error in Hotel Search Service - searchProducts() - `,
        error.message
      );
      return null;
    });
};
