/*! 
* @license https-aware - v0.0.1
* (c) 2013 Julien VALERY https://github.com/darul75/https-aware
* License: MIT 
*/
function HttpsAware(a){var b=this;return a&&(b=a),"https"===b.headers[HEADER_1]||"on"===b.headers[HEADER_2]}var http=require("http"),HEADER_1="x-forwarded-proto",HEADER_2="front-end-https";http.IncomingMessage.prototype.isHttps=HttpsAware,exports.isHttps=HttpsAware;