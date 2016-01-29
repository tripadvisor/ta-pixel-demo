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
var Promise = require('promise');

var SUPPORTED_PARAMS = ['start_date', 'end_date', 'is_member'];

app.engine('dust', cons.dust);
cons.dust.helpers = require('dustjs-helpers');
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');
app.use('/assets', express.static(__dirname + '/assets'));

function getParams(req) {
  var i
  ,   p
  ,   params
  ;

  params = {
    is_set: false,
    url_params: ''
  };

  for (i = 0; i < SUPPORTED_PARAMS.length; i++) {
    p = SUPPORTED_PARAMS[i];
    params[p] = req.query[p];

    if (params[p]) {
      params.is_set = true;
      params.url_params += (params.url_params.length > 0 ? '&' : '?') + p + '=' + params[p];
    }
  }

  return params;
}

app.get('/', function(req, res) {
  res.render('index', getParams(req));
});

app.get('/book', function(req, res) {
  res.render('book', getParams(req));
});

app.get('/confirm', function(req, res) {
  res.render('confirm', getParams(req));
});

function start() {
  return new Promise(function(resolve) {
    app.listen(8080, function () {
      console.log('Demo site listening on port 8080');
      resolve();
    });
  });
}

module.exports = {
  start: start
};

// Start the server if we're calling this module directly
if (require.main === module) {
  start();
}

