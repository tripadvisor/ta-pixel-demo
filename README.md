# ta-pixel-demo
A very simple site for the purposes of demonstrating TA Retargeting pixel integration.

## to install
1. `npm install`

## to run
1. `npm start`
2. Access the site at http://SERVERNAME:8080 

## to test

The mocha suite will automatically start the demo server, then fire a phantomJS 
child process to request the demo page. It will pass the results of its pixel fires
back to mocha via stdout, which will parse and validate them.

1. Make sure nothing is running on localhost:8080
2. `npm run test`

