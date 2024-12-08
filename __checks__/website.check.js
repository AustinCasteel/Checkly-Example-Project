const path = require('path');
const { BrowserCheck } = require('checkly/constructs');
const { emailChannel } = require('../alert-channels');


new BrowserCheck('homepage-browser-check', {
  name: 'Home page',
  emailChannel,
  code: {
    entrypoint: path.join(__dirname, 'homepage.spec.js'),
  },
  runParallel: true,
});

new BrowserCheck('navigation-browser-check', {
  name: 'Navigation Check',
  emailChannel,
  code: {
    entrypoint: path.join(__dirname, 'navigation.spec.js'),
  },
  runParallel: true,
});