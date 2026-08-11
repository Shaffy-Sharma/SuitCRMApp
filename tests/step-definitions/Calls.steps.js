const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const CallsPage = require('../pages/CallsPage');

let callsPage;

// ---- Background ----
// Given user launch CRM application
// Given user is logged into SuiteCRM

Given('user launch CRM application', async function () {
    // Launch/application setup is usually handled in hooks.js
    // Example:
    // await this.page.goto('http://localhost/suitecrm');
});

Given('user is logged into SuiteCRM', async function () {
    // Login is usually handled in hooks.js
    // Example:
    // await this.page.locator('#user_name').fill('admin');
    // await this.page.locator('#username_password').fill('password');
    // await this.page.locator('#bigbutton').click();
});

Given('user navigate to the Calls module', async function () {
    callsPage = new CallsPage(this.page);

    await callsPage.navigateToCalls();
});

When('user create call using mandatory fields', async function () {
    await callsPage.createCallWithMandatoryFields();
});

Then('Call name should be display correctly on Call details page', async function () {
    const callName = await callsPage.getCallNameFromDetailsPage();

    expect(callName).toBe(this.callName);
});

When('user create call using all fields', async function () {
    this.callName = `Test Call ${Date.now()}`;

    await callsPage.createCallWithAllFields(this.callName);
});

When('user select cancel button from create call page', async function () {
    await callsPage.clickCancel();
});

Then('user should be redirected to the Calls list view', async function () {
    await expect(this.page).toHaveURL(/.*Calls.*/);

    // Optional additional validation
    await expect(
        this.page.getByText('Calls')
    ).toBeVisible();
});
```
