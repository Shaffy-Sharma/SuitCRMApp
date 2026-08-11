Feature: SuiteCRM Login Page

Background:
Given the user launches the browser and enter url
When the user is on the SuiteCRM login page

Scenario: Verify SuiteCRM logo is displayed
Then the user should see the SuiteCRM logo

Scenario: Verify Username field is displayed
Then the user should see the Username field

Scenario: Verify Password field is displayed
Then the user should see the Password field

Scenario: Verify Login button is displayed
Then the user should see the Login button

Scenario Outline: Verify Login Credentials.
When the user enters valid login credentials and clicks the Login button
 | will | will |
Then the user should navigate to the SuiteCRM Home page


  
