Feature: Create Document in SuiteCRM

  Background:
    Given the user is logged in to SuiteCRM

  Scenario: Verify the Create Document page layout
    Given the user is on the Create Document page
    When the Create Document page finishes loading
    Then the Overview tab and document fields should be displayed

  Scenario: Verify required field indicators
    Given the user is on the Create Document page
    When the user reviews the form labels
    Then required field indicators should be displayed beside all mandatory fields

  Scenario: Create a document with only required information
    Given the user is on the Create Document page and has valid data for all mandatory document fields
    When the user fills in all mandatory fields and clicks the Save button
    Then the document should be created successfully

  Scenario: Create a document with all available information
    Given the user is on the Create Document page and has valid data for all document fields
    When the user fills in all available document fields and clicks the Save button
    Then the document should be created successfully with all entered information displayed correctly

  Scenario: Verify File is mandatory
    Given the user is on the Create Document page and has completed all other mandatory fields except the File field
    When the user clicks the Save button
    Then a missing required field message should be displayed for the File field

  Scenario: Cancel document creation
    Given the user is on the Create Document page and has entered document information
    When the user clicks the Cancel button
    Then the user should be redirected to the Documents list view

  Scenario: Edit the Revision field
    Given an existing document is opened in Edit view
    When the user updates the Revision field and clicks the Save button
    Then the updated Revision value should be displayed