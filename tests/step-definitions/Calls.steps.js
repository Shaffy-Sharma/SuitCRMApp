import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CallsPage } from './CallsPage.js'; // Ensure file extension is added if using ES modules

// Shared variable for the page object across steps
let callsPage;

Given('the user is on the Calls management module', async function () {
  // 'this.page' comes from your Cucumber world setup context
  callsPage = new CallsPage(this.page); 
  await callsPage.navigateToCallsModule();
});

// Scenario 1 & 5: Create Call / Mandatory Fields
When('the user opens the form to log a new call', async function () {
  await callsPage.openCreateCallForm();
});

When('the user enters {string} as the subject', async function (subjectText) {
  await callsPage.fillSubject(subjectText);
});

When('the user saves the call entry', async function () {
  await callsPage.clickSave();
});

Then('the new call record should be successfully created', async function () {
  await expect(callsPage.page.getByText('Call created successfully')).toBeVisible();
});

// Scenario 2: Redirect to List View
When('the user redirects to the Calls List View', async function () {
  await callsPage.openCallsListView();
});

Then('the search view should display all existing entries', async function () {
  await expect(callsPage.page).toHaveURL(/.*view-calls/);
  await expect(callsPage.page.getByRole('heading', { name: 'All Calls' })).toBeVisible();
});

// Scenario 3: Import Wizard
When('the user launches the structural Import Wizard', async function () {
  await callsPage.openImportWizard();
});

Then('the Import Calls screen should be visible', async function () {
  await expect(callsPage.page.getByRole('heading', { name: 'Import Wizard' })).toBeVisible();
});

// Scenario 4: Delete Call
Given('the user opens an existing call entry', async function () {
  await callsPage.openCallsListView();
  await callsPage.page.getByRole('link', { name: 'Existing Call' }).first().click();
});

When('the user deletes the call entry', async function () {
  await callsPage.clickDelete();
});

Then('the call entry should be completely removed', async function () {
  await expect(callsPage.page.getByText('Call deleted successfully')).toBeVisible();
});

// Scenario 5: Missing Mandatory Fields Validation Error
Then('a required fields error alert should appear', async function () {
  await expect(callsPage.page.getByText('Subject is a required field')).toBeVisible();
});

// Scenario 6: Duplicate Entry
When('the user triggers the duplicate feature', async function () {
  await callsPage.clickDuplicate();
});

Then('a duplicate call entry record should copy over', async function () {
  await expect(callsPage.page.getByText('Duplicate Call Created')).toBeVisible();
});

// Scenario 7: Reschedule Conflict
When('the user reschedules the call to a conflicting timeframe', async function () {
  await callsPage.clickReschedule();
});

Then('a schedule conflict warning should be flagged', async function () {
  await expect(callsPage.page.getByText('Schedule conflict detected')).toBeVisible();
});
