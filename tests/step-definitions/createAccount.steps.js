const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

//Scenario #1 Step Definition - START

Given('I am logged into the CRM application', async function () {

    await this.page.goto(process.env.BASE_URL);
    await expect(this.page).toHaveTitle(/CRM/i);
});


Given('I navigate to the Accounts page', async function () {

    await this.page.getByRole('link', { name: 'Accounts' }).click();
    await expect(this.page.getByText('Accounts', { exact: true })).toBeVisible();
});


Given('I click on the Create Account button', async function () {

    await this.page.getByRole('button', { name: /Create/ }).click();
    await expect(this.page.getByText('Create', { exact: true })).toBeVisible();
});


Then('the Create Account page should be displayed', async function () {

    await expect(this.page.getByText('Create', { exact: true })).toBeVisible();
});

//Scenario #1 Step Definition - END