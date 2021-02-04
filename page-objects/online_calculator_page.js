const { client } = require('nightwatch-api');
const ocr = require('../libs/ocr-tesseract');

const testAction = {
  async openPage(url) {
    return client.url(url);
  },

  async inputValue(keyInput) {
    await this.setValue('@page', keyInput);
    await this.api.pause(300);
  },

  async waitCalculatorToBeVisible(timeout) {
    await this.waitForElementVisible('@page', timeout);
    await this.waitForElementVisible('@calculator', timeout);
  },

  async getCalculationResult() {
    await this.api.saveScreenshot("./output/temp/ocr/online_calculator_ss.png");
    return await ocr.getTextInImage("./output/temp/ocr/online_calculator_ss.png");
  }
};

module.exports = {
  url() {
    return 'https://www.online-calculator.com/html5/online-calculator/index.php?v=10/'; // iframe from https://www.online-calculator.com/full-screen-calculator/
  },
  elements: {
    calculator: {
      selector: '#canvas',
    },
    page: 'body',
  },
  commands: [ testAction ]
};

