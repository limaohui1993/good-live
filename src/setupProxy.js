//处理访问他人接口跨域问题

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://bang.360.cn',
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  );
};