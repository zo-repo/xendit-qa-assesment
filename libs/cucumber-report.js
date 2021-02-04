const reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: './output/reports/cucumber_report.json',
        output: './output/reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "DEV",
            "Browser": "Chrome 88.0.4324.9",
            "Platform": "Mac OS X",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

reporter.generate(options);


//more info on `metadata` is available in `options` section below.

//to generate consodilated report from multi-cucumber JSON files, please use `jsonDir` option instead of `jsonFile`. More info is available in `options` section below.
