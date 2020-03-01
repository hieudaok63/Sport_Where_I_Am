/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const fs = require('fs');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'mock-data/db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === 'POST') {
    // Converts POST to GET and move payload to query params
    // This way it will make JSON Server that it's GET request
    req.method = 'GET';
    req.query = req.body;
  }
  // Continue to JSON Server router
  next();
});

// Map the actual server api url (the left side in routes.json) to the json-server url (on the right inside routes.json)
const contents = fs.readFileSync(path.join(__dirname, 'routes.json'));
const customRoutes = JSON.parse(contents);
server.use(jsonServer.rewriter(customRoutes));
server.use(router);

server.listen(4000, () => {
  // eslint-disable-next-line no-console
  console.log('JSON Server is running');
});
