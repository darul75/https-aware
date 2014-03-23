Https-aware [![NPM version](https://badge.fury.io/js/https-aware.png)](http://badge.fury.io/js/https-aware) [![Build Status](https://travis-ci.org/darul75/https-aware.svg?branch=master)](https://travis-ci.org/darul75/https-aware) [![Total views](https://sourcegraph.com/api/repos/github.com/darul75/https-aware/counters/views.png)](https://sourcegraph.com/github.com/darul75/https-aware)
=====================

Be aware wether initial request was HTTPS or HTTP.

Why
------------

Behing Proxy, Load balancer or other tricky network infrastructure request protocol is often balanced between HTTPS/HTTP.

This module make a header check for following headers

* Front-End-Https
* X-Forwarded-Proto

In my case, a load balancer was setting 'front-end-https' to 'on'.

Default node HTTP 'request' object prototype is enhanced to get a new method : isHttps() but, you may use isHttps(req) instead.

Installation
------------

Using npm:

```
npm install https-aware
```

Usage
-------------

```javascript
var aware = require('https-aware');
var http = require('http');
// your stuff...

// express style
var server = http.createServer(function(req, res) {            
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('request was made with https header or not :' + req.isHttps());
}).listen(8081); 

// express style
var server = http.createServer(function(req, res) {            
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('request was made with https header or not :' + req.isHttps());
}).listen(8081);
```

### Build

You can run the tests by running

```
npm install
```
or
```
npm test
```

assuming you already have `grunt` installed, otherwise you also need to do:

```
npm install -g grunt-cli
```

## License

The MIT License (MIT)

Copyright (c) 2013 Julien Valéry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.




