const axios = require('axios');

const strTimeOut = process.env.TIME_OUT;
const intTimeOut = (strTimeOut && parseInt(process.env.TIME_OUT)) || 3000;

class HttpClient {
  static getHttpClient(optionalTimeOut) {
    const timeOut = optionalTimeOut || intTimeOut;
    return axios.create({
      timeout: timeOut,
    });
  }
}

module.exports = HttpClient;
