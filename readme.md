# Xendit Hiring Assessment 

This is repo is to demonstrate the usage of automation testing framework using CucumberJs, Selenium, NightWatch-api and OCR technology.

The reason of using OCR for this automation testing is because the target application to be tested is using canvas element, it which most automation framework like selenium doesn't have the ability yet to extract values from canvas. Therefore to overcome that problem, OCR text recognition is the best approach for this assessment.

## Diagram Overview
![alt text](https://github.com/zo-repo/xendit-qa-assessment/blob/main/docs/OCR-testing.png?raw=true)

## Screenshots / Screen Recording
### Quick screen recording of executing tests
![alt text](https://github.com/zo-repo/xendit-qa-assessment/blob/main/docs/execute-test.gif)

### Report Sample
![alt text](https://github.com/zo-repo/xendit-qa-assessment/blob/main/docs/sample-report.png?raw=true)

### Online Calculator (#canvas element)
![alt text](https://github.com/zo-repo/xendit-qa-assessment/blob/main/docs/online_calculator_ss.png?raw=true)

### OCR sample (take value from onlien calculator result screen)
![alt text](https://github.com/zo-repo/xendit-qa-assessment/blob/main/docs/ocr-screenshot.png?raw=true)

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


## License
[Open Source](https://opensource.com/)