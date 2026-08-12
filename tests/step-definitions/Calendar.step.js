import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CalendarPage } from './CalendarPage.js';

let calendarPage;

// --- INITIAL BACKGROUND SETUP ---
Given('the user is logged into the SuiteCRM Calendar module', async function () {
  // 'this.page' is the active browser tab passed from your test context
  calendarPage = new CalendarPage(this.page);
  await calendarPage.openCalendarModule();
});

// --- SCENARIO 1: SCHEDULE A STANDARD BUSINESS MEETING ---
When('the user schedules a standard business meeting named {string} at {string}', async function (title, time) {
  await calendarPage.clickScheduleMeeting();
  await calendarPage.fillMeetingDetails(title, time);
  await calendarPage.saveMeeting();
});

Then('the meeting should save successfully without issues', async function () {
  await expect(calendarPage.successToast).toBeVisible();
});

// --- SCENARIO 2: PREVENT OVERLAPPING MEETINGS ---
When('the user tries to book a meeting named {string} at the exact same time slot {string}', async function (title, time) {
  await calendarPage.clickScheduleMeeting();
  await calendarPage.fillMeetingDetails(title, time);
  await calendarPage.saveMeeting();
});

Then('an overlapping booking error warning should be displayed', async function () {
  await expect(calendarPage.conflictWarning).toBeVisible();
});

// --- SCENARIO 3: BACK-TO-BACK MEETINGS ALLOWED ---
When('the user books a sequential meeting starting exactly when the previous meeting ends', async function () {
  await calendarPage.clickScheduleMeeting();
  await calendarPage.fillMeetingDetails('Next Strategy Session', '2:00 PM');
  await calendarPage.saveMeeting();
});

Then('the system should allow saving back-to-back meetings without showing errors', async function () {
  await expect(calendarPage.successToast).toBeVisible();
  await expect(calendarPage.conflictWarning).not.toBeVisible();
});

// --- SCENARIO 4: CANCEL MEETING DELETION ---
When('the user triggers a delete but cancels the confirmation', async function () {
  await calendarPage.clickDelete();
  await calendarPage.cancelDeletion();
});

Then('the meeting event {string} should remain visible on the board', async function (eventTitle) {
  await expect(calendarPage.calendarEvent(eventTitle)).toBeVisible();
});

// --- SCENARIO 5: MISSING MANDATORY FIELDS ---
When('the user attempts to save a meeting without completing required info', async function () {
  await calendarPage.clickScheduleMeeting();
  await calendarPage.fillMeetingDetails('', ''); // Sends empty blanks
  await calendarPage.saveMeeting();
});

Then('a missing mandatory field alert indicator must be highlighted', async function () {
  await expect(calendarPage.errorMessage).toBeVisible();
});

// --- SCENARIO 6: CROSS-DAY DRAG AND DROP ---
When('the user drags the event {string} and drops it onto {string}', async function (eventTitle, targetDay) {
  await calendarPage.dragEventToDay(eventTitle, targetDay);
});

Then('the event should move position cleanly on the display UI layout', async function () {
  await expect(calendarPage.successToast).toBeVisible();
});

// --- SCENARIO 7: MODIFY EVENT TIME WITHOUT CONFLICT ---
When('the user moves an event timeframe to a clear slot', async function () {
  // Drags a meeting to Friday where there are no existing events
  await calendarPage.dragEventToDay('Flexible Meeting', 'Friday');
});

Then('the appointment should update location without throwing conflict errors', async function () {
  await expect(calendarPage.conflictWarning).not.toBeVisible();
});
