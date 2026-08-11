const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

Given('user launch browser and enter url', async function () {
  // Browser is already launched and navigated to the base URL
  // by the Before hook in tests/hooks/hooks.js
  expect(this.page).toBeTruthy();
});

Then('user is on login page', async function () {
  await expect(this.page).toHaveURL(/suiteondemand\.com/);
});


Given('the user launches the browser and enter url', async function () {

});

When('the user is on the SuiteCRM login page', async function () {

});

Then('the user should see the SuiteCRM logo', async function () {

});

Then('the user should see the Username field', async function () {

});

Then('the user should see the Password field', async function () {

});

Then('the user should see the Login button', async function () {

});

When(
    'the user enters username {string} and password {string} and clicks the Login button',
    async function (username, password) {

    }
);

Then('the user should see {string}', async function (expectedResult) {

});


