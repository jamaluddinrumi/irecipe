global.navigator = {
    userAgent: 'Googlebot',
  }
// server.js
const prerender = require('prerender-node');
var server = prerender({
 chromeFlags: [ ' — no-sandbox', ' — headless', ' — disable-gpu', ' — remote-debugging-port=9222', ' — hide-scrollbars' ],
 logRequests: true
});
server.start();