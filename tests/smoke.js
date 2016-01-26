var page = require('webpage').create();

page.onResourceReceived = function(res) {
  if (res.url.indexOf('/RT') >= 0 && res.stage === 'end') {
    console.log(JSON.stringify(res));
    phantom.exit(0);
  }
};

page.open('http://localhost:8080');