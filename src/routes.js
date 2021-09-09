const express = require('express');
const graphqlHttp = require('express-graphql');
const bearerToken = require('express-bearer-token');
const schema = require('./schema');

const gqlPrefix = process.env.GQL_PREFIX || 'gql';

const router = new express.Router({
  strict: true,
  caseSensitive: true,
});

router.use(bearerToken());

const customFormatErrorFn = error => {
  const message = error.message || 'An unknown error occurred.';
  const path = error.path ? error.path : '';
  const status = error.status ? error.status : 0;

  return { message, status, path };
};

const initializedGraphQLMiddleware = graphqlHttp({
  // GraphQL’s mock-data schema
  schema,
  // Pretty Print the JSON response
  pretty: true,
  // Enable GraphiQL dev tool
  graphiql: true,
  customFormatErrorFn,
  subscriptionsEndpoint: `ws://localhost:5000/subscriptions`,
});

// ELB ping / health check
router.get('/ping', (req, res) => res.send());
router.use(`/${gqlPrefix}`, initializedGraphQLMiddleware);

module.exports = router;
