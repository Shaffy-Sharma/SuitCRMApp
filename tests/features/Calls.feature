Feature: Calls Management in SuiteCRM

Background:
    Given the user session is authenticated in SuiteCRM

  Scenario: Create a new Call record
    Given the user is on the SuiteCRM dashboard matrix interface
    When the user opens the action link "Log Call" in the sidebar navigation
    Then a fresh Call Record form opens successfully in Edit View layout focusing on the "Subject" field


  Scenario: Redirect to List View for search
    Given the user is currently working inside the active execution profile
    When the user chooses the action element "View Calls" on the workspace layout
    Then the page updates to the List View with your matching call records 


  Scenario: Launch structural Import Wizard - Import Calls
    Given the user has administrative preparation privileges enabled
    When the user triggers the action element "Import Calls"
    Then the Import Wizard opens to step one allowing user to map their data


  Scenario: Delete a Call Entry
    Given the user is on the "List View" of a call record
    When the user selects the "Delete" action button
    Then a confirmation modal pops up asking: "Are you sure you want to delete this item?"


  Scenario: Mandatory fields verification
    Given a fresh Call Record form opens successfully in Edit View layout
    When the user leaves the "Subject" field completely empty the primary "Save" form trigger
    Then the submission fails inline validation error displays "Missing required field"


  Scenario: Create a Duplicate Call Entry
    Given the user is on the Call creation form
    When the user submits data that exactly matches an existing call record
    Then the duplicate entry is saved successfully


  Scenario: Reschedule Call Conflict
    Given the user is currently working inside the active execution profile
    When the user selects the action element "Reschedule Calls" enters a reschedule reason
    Then the verify call attempt history includes the reschedule reason
