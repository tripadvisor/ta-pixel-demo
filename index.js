/**
 * TA Pixel Demo
 *
 * Serves a simple mock OTA to test 
 * the TripAdvisor retargeting pixel
 *
 * @author mtownsend
 * @since Jan 2015
 **/

'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Demo site listening on port 3000');
});


