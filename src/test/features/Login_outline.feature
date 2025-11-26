
Feature: Login feature

    Background: Pre Conditions ( to login)
        Given I am on the home page
        When I go to login page
    @critical
    Scenario Outline: Validate Login feature

        And I type a user name <userName>
        And I type a user password <userPassword>
        And I click on login button
        Then I should be presnted with message '<message>'

        Examples:
            | userName | userPassword | message              |
            | username | password     | logged in seccesfuly |
            | azaiz    | azaiz123     | invalid credentials  |