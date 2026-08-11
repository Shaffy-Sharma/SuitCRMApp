Feature: Calendar Event Creation SuiteCRM

  Background:
    Given the user is logged into the SuiteCRM dashboard


  Scenario: Successfully schedule a standard business meeting
    Given the user is on the Calendar view
    When the user is looking at an empty calendar view grid,
    selects directly a blank grid block area to enter the Subject Field
    Then the calendar grid event appears with an "Event Created" alert


  Scenario: Prevent overlapping meetings
    Given a time slot is already occupied by an existing meeting
    When the user schedules a new meeting during that same window
    Then the system overwrites the old event slot


  Scenario: Back-to-Back Meetings Allowed (No Overlap)
    Given a new meeting starts exactly when the previous meeting ends
    When the user schedules the new meeting
    Then the event slot is successfully locked in


  Scenario: Cancel meeting deletion
    Given the user has selected a meeting for deletion
    And the delete confirmation message is displayed
    When the user cancels the delete action
    Then a confirmation modal pops up asking:"Are you sure you want to delete this item?"


  Scenario: Missing Mandatory Fields
    Given the user opens a fresh calendar creation form
    When the user leaves the Subject field completely blank
    Then the form remains open,shows a validation error highlights the "Missing required field"


  Scenario: Cross-day drag and drop
    Given the user holds an event node
    When the user drag it to the same time slot on another day
    Then the system allows a event moves straight to new slot grid 


  Scenario: Modify event time without conflict
    Given  the user opens an existing meeting node
    When the user update the event time to an available time slot
    Then the event should move to the new time slot,event updated successfully

