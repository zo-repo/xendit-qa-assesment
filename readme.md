# Xendit Hiring Assessment 

*Important: Please read all below before pulling this repo.*

This is repo is to demonstrate the usage of automation testing framework using CucumberJs, Selenium, NightWatch-api and OCR technology.

The reason of using OCR for this automation testing is because the target application to be tested is using canvas element, it which most automation framework like selenium doesn't have the ability yet to extract values from canvas. Therefore to overcome that problem, OCR text recognition is the best approach for this assessment.

## Diagram Overview
![alt text](https://github.com/zo-repo/xendit-qa-assessment/blob/master/docs/OCR-testing.png?raw=true)

## Screenshots / Screen Recording

### Report Sample
![alt text](https://github.com/zo-repo/xendit-qa-assessment/blob/master/docs/sample-report.png?raw=true)

### Online Calculator (#canvas element)
![alt text](https://github.com/zo-repo/xendit-qa-assessment/blob/master/docs/online_calculator_ss.png?raw=true)

### OCR sample (take value from online calculator result screen)
![alt text](https://github.com/zo-repo/xendit-qa-assessment/blob/master/docs/ocr-screenshot.png?raw=true)

### Quick screen recording of executing tests
![alt text](https://github.com/zo-repo/xendit-qa-assessment/blob/master/docs/execute-test.gif?raw=true)

## Dependencies
- [Node.js](https://nodejs.org/en/download/)


## Installation

Clone this repo and in terminal type below to install.

```bash
npm install
```

## Usage

```bash
npm run test #to run the whole tests (default headless chrome)
npm run test:chrome #to run on chrome browser (non headless)
npm run report #to see the run report
```

## List of automated tests scenarios

1. Verify that the calculator is displayed when visited the URL https://www.online-calculator.com/full-screen-calculator/ with a browser.
2. Verify that user able to interact with the calculator.
3. Verify that user able to do basic arithmetic operation between 2 same or different numbers on the calculator.
4. Verify that user able to do basic arithmetic operation with the smallest numbers on the calculator.
5. Verify that user able to do basic arithmetic operation with larger numbers on the calculator.
6. Verify that the calculator able to handle round up values effectively.
7. Verify that when dividing any number with 0, it will display Error.

## Troubleshoot
- If you're facing an issue browser keep restarting, make sure your browser is the same as the webdriver listed in the package.json/npm, you can run below code to make check the version
```bash
npm outdated
```
- if you face failures during the test where it should not suppose too, please don't do any interaction with your machine while it is running, let it run themselve for a few seconds.
- The screensize of the running machine give massive effect to the test results, try run it headless this may fixed the problem.
```bash
npm run test
```

## Known Issue
- Sometimes the OCR failed to read some of the numbers like negative signs, decimal points, letters.
- Currently there is one failure when running headless, 22.11 but the OCR only read it as 2211.
- Running on normal browser (not headless) will high likely give more test failures.
- Running on smaller screen will increase test failures (due to the screenshot size difference).

## Tested On
```
Machine: MacOS X
Browser: Chrome
```

## License
[Open Source](https://opensource.com/)