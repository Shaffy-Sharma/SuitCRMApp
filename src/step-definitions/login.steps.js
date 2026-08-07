const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

Given('user launch browser and enter url', async function () {
  // Browser is already launched and navigated to the base URL
  // by the Before hook in src/hooks/hooks.js
  expect(this.page).toBeTruthy();
});

Then('user is on login page', async function () {
  await expect(this.page).toHaveURL(/suiteondemand\.com/);
});



