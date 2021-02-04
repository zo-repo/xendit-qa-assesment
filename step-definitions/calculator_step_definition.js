const { Given, Then, When } = require('cucumber');
const { client } = require('nightwatch-api');
const assert = require('assert');
const page = client.page.online_calculator_page();

Given(/^I open a browser and open the online calculator$/, async () => {
  await page.openPage(page.url());
});

When(/^the online calculator is loaded, I press the key "([^"]*)","([^"]*)","([^"]*)" and finally "([^"]*)"$/, async (firstData, operand1, secondData, operand2) => {
  await page.waitCalculatorToBeVisible(4000);
  await page.inputValue(`${firstData}`);
  await page.inputValue(`${operand1}`);
  await page.inputValue(`${secondData}`);
  await page.inputValue(`${operand2}`);
});

Then(/^the online calculator will show the result of "([^"]*)"$/, async (expectedResult) => {
  let result = await page.getCalculationResult();
  assert.strictEqual(result, expectedResult)
});