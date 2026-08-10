const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const OpportunitesPage = require('../pages/OpportunitesPage');

// ---- Background ----
// Given user launch CRM application
// Given user is logged into SuiteCRM

Given('user launch CRM application', async function () {
  
 
});

Given('user is logged into SuiteCRM', async function () {
  
});



Given('user navigate to the Opportunities module', async function () {
  

});

When('user create opportunity using mandatory fields', async function () {
  
});

Then('Opportunity name should be display correctly on Opportunity details page', async function () {
  
  
});



When('user create opportunity using all fields', async function () {
  });



When('user select cancel button from create opportunity page', async function () {
 
});

Then('user should be redirected to the Opportunities list view', async function () {

});





When('user create opportunity with all mandatory field except "Sales stage"', async function () {
  
});

Then('user should see a validation error for "Missing required field: Sales Stage"', async function () {
 
});



When('user create opportunity with all mandatory field except "Opportunity name"', async function () {
  
});

Then('user should see a validation error for "Missing required field: Opportunity Name"', async function () {
  
});



When('user create an opportunity with invalid amount in "opportunity amount" field', async function () {
  
});

Then("user should see a validation error for \"Invalid currency format. Expected: '1,000.5'\"", async function () {
  
});



When('user create an opportunity with invalid probability in "probability" field', async function () {
 
});

Then("user should see a validation error for \"Invalid int format. Expected: '1,000'\"", async function () {
  
});



