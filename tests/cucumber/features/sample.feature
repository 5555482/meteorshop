Feature: One-liner description of this feature

  As a [role]
  I want [feature]
  So that [benefit]

  The story above is to set context for the reader. It doesn't actually have any impact on the test
  itself. The phrases inside the scenarios are ties to test code using regex, which you can see in
  /tests/features/step_definitions/steps.js

  Scenario:
    Given I am on the home page
    When I navigate to "/"
    Then I should see the title of "meteorshop"

  Feature: Allow users to login and logout

  As a user of the meteorshop
  I want to login and logout
  So that I can prove my identity and see personalized data

  Background:
    Given I am signed out

  Scenario: A user can login with valid information
    Given I am on the home page
    When I click on sign in link
    And I enter my authentication information
    Then I should be logged in

  Scenario: A user cannot login with bad information
    Given I am on the home page
    When I click on sign in link
    And I enter incorrect authentication information
    Then I should see a user not found error
