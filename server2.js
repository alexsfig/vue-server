var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverOne = 'http://104.131.164.244:5050',
    ServerTwo = 'http://localhost:3002',
    ServerThree = 'http://localhost:3002';
 
app.all("/app1/*", function(req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: serverOne});
});

app.listen(5057);
