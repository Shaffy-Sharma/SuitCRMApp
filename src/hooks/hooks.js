// Cucumber Before/After hooks
// Before: launch browser/context/page and initialize Page Objects
// After: close browser/context and attach reports/screenshots
require('dotenv').config();
const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('@playwright/test');
const config = require('../../playwright.config');

const browserTypes = { chromium, firefox, webkit };

setDefaultTimeout(60 * 1000);

Before(async function () {
  if (!process.env.BASE_URL) {
    throw new Error('BASE_URL is not set. Define it in a .env file or as an environment variable.');
  }

  const browserType = browserTypes[config.browser] || chromium;
  this.browser = await browserType.launch({ headless: config.headless });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  await this.page.goto(process.env.BASE_URL);
});

After(async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});