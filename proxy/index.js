const express = require('express');
const morgan = require('morgan');
const {createProxyMiddleware} = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Configuration
const PORT = 12111;
const HOST = '0.0.0.0';
const API_SERVICE_URL = 'http://0.0.0.0:4010';

// Logging
app.use(morgan('combined'));

// Proxy endpoints
const proxyMiddleware = createProxyMiddleware({
  target: API_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    ['^/v2/']: '/', // eslint-disable-line
  },
  logLevel: 'debug'
});

app.use('', proxyMiddleware);

// Start the Proxy
app.listen(PORT, HOST);
