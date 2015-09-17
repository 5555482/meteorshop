Feature: User Login

  As an existing user
  I want to be able to login
  So that I can access the meteorshop app

  Background:
    Given I am an existing user
    And I navigate to "/login"

  @dev
  Scenario: Log in
    When I enter my email "5555482@gmail.com" and password "12345678"
    And I submit the form
    Then I should see the home page