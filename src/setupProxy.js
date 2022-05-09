//credit to https://dev.to/pacheco/my-fullstack-setup-node-js-react-js-and-mongodb-2a4k
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};