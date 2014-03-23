// node http api
var http = require('http');

var HEADER_1 = 'x-forwarded-proto';
var HEADER_2 = 'front-end-https';

http.IncomingMessage.prototype.isHttps = HttpsAware;

function HttpsAware() {
  return this.headers[HEADER_1] === 'https' || this.headers[HEADER_2] === 'on';
}