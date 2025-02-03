const { createServer } = require("cors-anywhere");

const corsProxy = createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: [], // No header restrictions
  removeHeaders: [] // No headers removed
});

module.exports = async (req, res) => {
  req.url = req.url.replace(/^\/api/, ""); // Adjust request path for Vercel
  corsProxy.emit("request", req, res);
};
