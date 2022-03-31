const axios = require('axios');

const strTimeOut = process.env.TIME_OUT;
// eslint-disable-next-line radix
const intTimeOut = 15000 || (strTimeOut && parseInt(process.env.TIME_OUT));

class HttpClient {
  static getHttpClient(optionalTimeOut) {
    const timeOut = optionalTimeOut || intTimeOut;
    return axios.create({
      timeout: intTimeOut,
    });
  }
}

module.exports = HttpClient;
