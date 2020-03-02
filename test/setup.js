process.env.NODE_ENV = 'test';

global.app = require('../src').server;

global.url = `${process.env.BASE_GQL_URL}:${process.env.PORT}`;
global.request = require('supertest')(global.url);
global.expect = require('expect');

global.apiPrefix = process.env.GQL_PREFIX || 'gql';

after(() => {
  // eslint-disable-next-line global-require
  require('../src').stop();
});
