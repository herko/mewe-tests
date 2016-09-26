MeWe.com front-end test suite
===
[WebDriver.IO](http://webdriver.io/) tests for [MeWe.com](https://mewe.com/)'s registration features. 

## Installation
Clone repository and run `npm install`.
## Running tests
To fire all `wdio` tests run `npm test`.
## How it works
Page Object pattern is used to abstract any page information away from the tests. Every page extends `pageobjects/prototype.page.js`. This helps to make tests more clean. 

Actual tests live in `test/specs` directory. I've used Mocca(BDD) to describe suites. Chaijs library is used to make assertions more readable. 

After running `npm test` command, `selenium-standalone` package will start a standalone server. `selenium-standalone` already includes chromedriver, so it is not necessary to install it separately. Selenium will run Chrome browser and simulate all tests present in the test suite. 

## Further Improvements
- make use of PhantomJS headless browser to make tests much faster, if the purpose of test is just to test functionality, not compatibility
- perhaps make factory for user info generation, so its not always the same
- when testing failing registration, add test for EnterKey press (that might submit the form too)
- I noticed, that after `$('#registration-form').submit();` the form gets submitted but even with valid data user is not registered and is redirected to home page ( that's why I didn't use `IndexPage.registrationForm.submit();` inside specs.
