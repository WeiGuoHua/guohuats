import {createProxyMiddleware } from 'http-proxy-middleware'
 
module.exports = function(app: any) {
 app.use(createProxyMiddleware('/api', { 
     target: 'http://localhost:9527',
     pathRewrite: {
       '^/api': '',
     },
     changeOrigin: true,
     secure: false
   }));
}