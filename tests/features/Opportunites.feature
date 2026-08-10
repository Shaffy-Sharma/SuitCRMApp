Feature: Opportunites module

Background: 
 Given user launch CRM application
Given user is logged into SuiteCRM 

Scenario: Create an opportunity with required fields
Given user navigate to the Opportunities module
When user create opportunity using mandatory fields  
Then Opportunity name should be display correctly on Opportunity details page

Scenario: Create an opportunity with required fields
Given user navigate to the Opportunities module
When  user create opportunity using all fields    
Then Opportunity name should be display correctly on Opportunity details page

Scenario: Cancel creating an opportunity
Given user navigate to the Opportunities module
When when user select cancel button from create opportunity page    
Then  user should be redirected to the Opportunities list view

Scenario: Saving without entering sales stage shows validation error
Given user navigate to the Opportunities module
 When user create opportunity with all mandatory field except "Sales stage"
Then user should see a validation error for "Missing required field: Sales Stage"

Scenario: Saving without entering Opportunity name shows validation error
Given user navigate to the Opportunities module
  When user create opportunity with all mandatory field except "Opportunity name"
Then user   should see a validation error for "Missing required field: Opportunity Name"
    

Scenario: Entering a non-numeric value in Opportunity Amount shows an error
Given user navigate to the Opportunities module
 When user  create an opportunity with invalid amount in "opportunity amount" field
Then user should see a validation error for "Invalid currency format. Expected: '1,000.5'"

Scenario: Entering a non-numeric value in Probability shows an error
Given user navigate to the Opportunities module
 When user  create an opportunity with invalid probability in "probability" field
Then user should see a validation error for "Invalid int format. Expected: '1,000'"