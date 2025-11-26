Feature: Login
    Background: Pre Conditions ( to login)
        Given I am on the home page
        When I go to login page

    Scenario: Successful login
        And I login with valid credentials
        Then I should be logged in

    Scenario: Invalid login
        And I login with invalid credentials
        Then I should see a login error


