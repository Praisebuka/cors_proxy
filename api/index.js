var createServer = require('cors-anywhere').createServer;

var corsProxy = createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: [], // No header restrictions
  removeHeaders: [], // No headers removed
});

module.exports = function (req, res) {
  req.url = req.url.replace(/^\/api/, ''); // Adjust request path for Vercel
  corsProxy.emit('request', req, res);
};
