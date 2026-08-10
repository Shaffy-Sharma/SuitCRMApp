// Cucumber Before/After hooks
// BeforeAll/AfterAll: launch the browser once and reuse a single context/page
// for every scenario in the run (only one browser window opens in total)
require('dotenv').config();
const { Before, BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const config = require('../../playwright.config');

setDefaultTimeout(60 * 1000);

let browser;
let context;
let page;

BeforeAll(async function () {
  if (!process.env.BASE_URL) {
    throw new Error('BASE_URL is not set. Define it in a .env file or as an environment variable.');
  }

  browser = await chromium.launch({ headless: config.headless });
  context = await browser.newContext();
  page = await context.newPage();
});

Before(async function () {
  this.browser = browser;
  this.context = context;
  this.page = page;
  await this.page.goto(process.env.BASE_URL);
});

AfterAll(async function () {
  await page.close();
  await context.close();
  await browser.close();
});