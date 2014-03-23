// node http api
var http = require('http');

var HEADER_1 = 'x-forwarded-proto';
var HEADER_2 = 'front-end-https';

http.IncomingMessage.prototype.isHttps = HttpsAware;

function HttpsAware(req) {
  var self = this;
  if (req)
    self = req;
  return self.headers[HEADER_1] === 'https' || self.headers[HEADER_2] === 'on';
}

module.aware = HttpsAware;