// Cucumber Before/After hooks
// Before: launch browser/context/page and initialize Page Objects
// After: close browser/context and attach reports/screenshots
require('dotenv').config();
const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const config = require('../../playwright.config');


setDefaultTimeout(60 * 1000);

Before(async function () {
  
  this.browser = await chromium.launch({headless: false,
        slowMo: 500  });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  await this.page.goto(process.env.BASE_URL);
});

After(async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});