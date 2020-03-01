const expressWinston = require('express-winston');
const logger = require('../tools/logger');

const reqFields = {
  url: true,
  method: true,
  httpVersion: true,
  originalUrl: true,
  headers: {
    'user-agent': true,
  },
};

module.exports = expressWinston.logger({
  winstonInstance: logger,
  colorize: false,
  statusLevels: true,
  requestFilter(req, fieldName) {
    if (!reqFields[fieldName]) {
      return false;
    }

    if (reqFields[fieldName] === true) {
      return req[fieldName];
    }

    return Object.entries(req[fieldName]).reduce(
      (acc, [subFieldName, subFieldValue]) => {
        if (reqFields[fieldName][subFieldName]) {
          return Object.assign(acc, {
            [subFieldName]: subFieldValue,
          });
        }
        return acc;
      },
      {}
    );
  },
});
