const { setDefaultTimeout, AfterAll, BeforeAll, After, Before, Status } = require('cucumber');
const { createSession, closeSession, startWebDriver, stopWebDriver, client } = require('nightwatch-api');

setDefaultTimeout(60000);

BeforeAll(async () => {
  await startWebDriver({ env: process.env.NIGHTWATCH_ENV || 'chromeHeadless' });
  await createSession();
});

Before({ tags: '@clear' }, async () => {
  return client.deleteCookies().refresh();
});

After({ tags: '@endWhenDone' }, async () => {
  var me = this;

  if (testCase.result.status === Status.FAILED) {
      return browser.takeScreenshot().then(function(screenshot) {
          return me.attach(screenshot, "image/png");
    });
  }
  client.end();
});

AfterAll(async () => {
  await closeSession();
  await stopWebDriver();
});