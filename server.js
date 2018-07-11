var fs = require('fs');

var url = require('url');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var ROOT = './';

server.listen(4000, function() {
    console.log('Listening on port 4000');
});

app.use("/", express.static(__dirname + '/'));

app.get('/', function(req, res) {
    // res.sendFile('/index.html');
    res.sendFile('/index.html', { root : ROOT});
});