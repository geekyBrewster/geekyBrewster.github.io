var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('server/public'));

// Using requst module to make HTTP requests from the server
// https://www.npmjs.com/package/request
var request = require('request');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(port, function() {
  console.log('localhost running on port', port);
});
