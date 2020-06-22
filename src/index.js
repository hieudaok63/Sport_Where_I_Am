import { createServer } from 'http';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';

import logger from './tools/logger';

const origEnv = require('dotenv').config();
require('dotenv-expand')(origEnv);

const express = require('express');

import getToken from './tools/get-token';

const { SWIAM_OPENAPI, SWIAM_API, BASE_GQL_URL } = process.env;

const app = express();

const PORT = process.env.PORT || 5000;
const BASE_URL = `${process.env.BASE_GQL_URL}:${PORT}`;

// general cache settings
app.set('etag', process.env.ENABLE_ETAG === 'true');

const schema = require('./schema');
const routes = require('./routes');
const requestLogger = require('./middleware/request-logger');

app.use(requestLogger);

global.logger = logger;

app.enable('strict routing');
app.enable('case sensitive routing');
logger.info('[] Enabling of strict and case sensitive complete.');

// Register common middleware
app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
logger.info('[] - Common middleware registration complete.');
app.use((req, res, next) => {
  const token = getToken(req);
  const withToken = {
    authorization:  token ? `Bearer ${token}` : "",
  };

  const headers = req.headers;
  req.headers = {
    ...headers,
    ...withToken
   };
  next();
});
app.use(routes);
logger.debug('[] Route registration complete.');
logger.info('[] Route registration complete.');

app.get('/health', (req, res) => {
  res.send('Healthy');
});

const webServer = createServer(app);

const server = webServer.listen(PORT, () => {
  logger.info(`NODE_ENV ${process.env.NODE_ENV}`);
  logger.info(`Server running at ${BASE_URL}`);
  logger.info(`Utilising api1 ${process.env.SWIAM_API}`);
  logger.info(`Utilising api2 ${process.env.SWIAM_OPENAPI}`);

  logger.info('SWIAM_OPENAPI: ');
  logger.info(SWIAM_OPENAPI);

  logger.info('SWIAM_API: ');
  logger.info(SWIAM_API);

  logger.info('BASE_GQL_URL: ');
  logger.info(BASE_GQL_URL);

  logger.info('PORT: ');
  logger.info(PORT);
});

function stop() {
  server.close();
}

module.exports = {
  server,
  stop,
};
