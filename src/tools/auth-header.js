const getHeaders = bearerToken => ({
  Authorization: `Bearer ${bearerToken}`,
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

const getAuthOption = bearerToken => ({
  headers: getHeaders(bearerToken),
});

module.exports = {
  getHeaders,
  getAuthOption,
};
