var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;
var server = require('./index');
var Promise = require('promise');
var chai = require('chai');
var assert = chai.assert;

function start_tests() {
  var childArgs = [
    path.join(__dirname, 'tests/smoke.js')
  ];

  return new Promise(function(resolve) {
    childProcess.execFile(binPath, childArgs, function (err, stdout, stderr) {
      resolve({ stdout: stdout, stderr: stderr });
    });
  });
}

describe('TA Pixel', function() {
  var result = null
  ,   pixelResponse = null
  ;

  before(function() {
    this.timeout(10000);
    return server.start().then(start_tests).then(function(r) {
      result = r;
      pixelResponse = JSON.parse(r.stdout);
    });
  });

  it('should complete', function() {
    assert(result !== null);
    assert(pixelResponse !== null);
  });

  it('should have a successful pixel', function() {
    assert(pixelResponse.status === 200);
  });

  it('should receive an image from the pixel server', function() {
    assert(pixelResponse.contentType === 'image/png');
  });
});