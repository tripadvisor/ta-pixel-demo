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
var cons = require('consolidate');
var app = express();

app.engine('dust', cons.dust);
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.render('index', {});
});

app.get('/book', function(req, res) {
  res.render('book', {});
});

app.get('/confirm', function(req, res) {
  res.render('confirm', {});
});

app.listen(8080, function() {
  console.log('Demo site listening on port 8080');
});


