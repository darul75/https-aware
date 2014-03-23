describe('test https aware',function() {
    var http = require('http');
    var httpsaware = require('../src/aware');  


    // CREATE SERVER
    before(function(done){    

        var server = http.createServer(function(req, res) {            
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('request was made with https header or not :' + req.isHttps());
        }).listen(8081);    

        server.on('listening', function() {   
            console.log('ok listening');     
            done();
        });

    });

    it('no https header',function(done) {  

        var options = {
            hostname: '127.0.0.1',
            port: 8081,
            path: '/test',
            method: 'GET'
        };

        var req = http.request(options, function(res) {            
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
               console.log(chunk);
            });
        });

        req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });

        // write data to request body
        // req.write('data\n');
        // req.write('data\n');
        req.end();    
         done();

        this.timeout(20000);
    });

    it('first https header',function(done) {  

        var options = {
            hostname: '127.0.0.1',
            port: 8081,
            path: '/test',
            method: 'GET',
            headers: {'X-Forwarded-Proto': 'https'}
        };

        var req = http.request(options, function(res) {            
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                console.log(chunk);                
            });
        });

        req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });

        // write data to request body
        // req.write('data\n');
        // req.write('data\n');
        req.end();    
        done();

        this.timeout(20000);
    });


    it('second https header',function(done) {  

        var options = {
            hostname: '127.0.0.1',
            port: 8081,
            path: '/test',
            method: 'GET',
            headers: {'front-end-https': 'on'}
        };

        var req = http.request(options, function(res) {            
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                console.log(chunk);
            });
        });

        req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });

        // write data to request body
        // req.write('data\n');
        // req.write('data\n');
        req.end();
        done();

        this.timeout(20000);
    });

});   