## Pecode-AQA-Test-Task

## Table of Contents
- [Installing](#installing)
- [Run tests](#run-tests)
- [Generate and Open Allure Report](#generate-and-open-allure-report)
- [Attachments](#attachments)

### Installing

1. Clone the project.
2. Use the package manager [npm](https://docs.npmjs.com/about-npm) to install all the dependencies. 

```bash
npm install
```

### Run tests

Use the following command to run all tests.

```bash
npm run wdio
```

Use the following commands to run specified tests.

1. Test Case: “Verify if the price filter working correctly for the following marketplaces”
```bash
npm run filter-test
```

2. Test Case: “Verify that a user can add items to the basket”
```bash
npm run basket-test
```

3. Test Case: “Verify that all items are correctly displayed according to your searching request”
```bash
npm run search-test
```

4. Test Case: “Verify that error messages should be displayed for Latin characters”
```bash
npm run checkout-test
```

### Generate and Open Allure Report

1. Run your tests and generate test result data (ie, after running it will generate allure-results folder).
2. From the same project directory, run the following command line

```bash
allure generate allure-results --clean && allure open
```

### Attachments

Watch a [video](https://www.dropbox.com/s/elm5glzc8lxrxo9/How%20To%20Run%20Tests.mov?dl=0) on how to run tests

#### Allure Report

<img width="1400" alt="allure-report" src="https://user-images.githubusercontent.com/91348165/218247062-f1314ae9-f1b5-4e04-98b5-91ff7cf952ed.png">
<img width="1400" alt="allure-results" src="https://user-images.githubusercontent.com/91348165/218247064-25de3fff-5295-467d-97f0-97ebce4a434e.png">
