Feature: Playground Application
  As a user
  I want to interact with the playground application
  So that I can verify it works correctly

  Background:
    Given I am on the homepage

  Scenario: User can see the welcome page
    When I view the page content
    Then I should see the welcome message
    And the page should load successfully

  Scenario: User can see the documentation link
    When I look for the documentation link
    Then I should see a link to SvelteKit documentation

  Scenario: User can interact with the page
    When I click on a navigation link
    Then I should be taken to the correct page
    And the page should display the expected content

  Scenario Outline: Page should be responsive on different devices
    When I view the page on a <device> screen
    Then the page should be properly displayed
    And all content should be visible

    Examples:
      | device    |
      | mobile    |
      | tablet    |
      | desktop   | 