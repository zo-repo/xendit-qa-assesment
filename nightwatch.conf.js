const seleniumServer = require('selenium-server-standalone-jar');
const chromeDriver = require('chromedriver');
const geckoDriver = require('geckodriver');
const ieDriver = require('iedriver');
const edgeDriver = require('edgedriver');

module.exports = {
  page_objects_path: './page-objects',
  test_settings: {
    default: {
      selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        port: 4444,
        cli_args: {
          'webdriver.chrome.driver': chromeDriver.path,
          'webdriver.gecko.driver': geckoDriver.path,
          'webdriver.ie.driver': ieDriver.path,
          'webdriver.edge.driver': edgeDriver.path
        },
        screenshots: {
          enabled : false,
          path: "./tests/output/screenshots",
          on_failure: true,
          on_error: true
        }
      }
    },
    chromeHeadless: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: false,
          args: ['--headless']
        }
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: false
        }
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        marionette: true
      }
    },
    edge: {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
        javascriptEnabled: true
      }
    },
    ie: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        javascriptEnabled: true
      }
    }
  }
};