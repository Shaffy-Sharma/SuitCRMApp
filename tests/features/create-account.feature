Feature: Create Account

  I want to create a new account

  Background:
    Given I am logged into the CRM application
    And I navigate to the Accounts page
    And I click on the Create Account button

  Scenario: Verify Create Account page is displayed
    Then the Create Account page should be displayed
    And the following account fields should be visible:
      | Name |
      | Website |
      | Email Address |
      | Assigned To |
      | Office Phone |
      | Billing Street |
      | Billing Postal Code |
      | Billing City |
      | Billing State |
      | Billing Country |
      | Shipping Street |
      | Shipping Postal Code |
      | Shipping City |
      | Shipping State |
      | Shipping Country |
      | Description |

  Scenario: Verify Name field is mandatory
    When I click the Save button
    Then a validation message should be displayed for the Name field
    And the account should not be created

  Scenario: Create an account with valid mandatory information
    When I enter "ABC Corp" in the Name field
    And I enter "https://www.abccorp.com" in the Website field
    And I enter "test@abccorp.com" in the Email Address field
    And I enter "1234567890" in the Office Phone field
    And I enter "123 Main Street" in the Billing Street field
    And I enter "Atlanta" in the Billing City field
    And I enter "GA" in the Billing State field
    And I enter "30301" in the Billing Postal Code field
    And I enter "USA" in the Billing Country field
    And I click the Save button
    Then the account should be created successfully
    And the account name "ABC Corporation" should be displayed
