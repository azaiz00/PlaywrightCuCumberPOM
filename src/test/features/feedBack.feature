@smoke
Feature: feedBack feature

    Background: Pre Conditions ( to feedBack)
        Given I am on the home page
        When I click on the feedback button


    Scenario: valide feedback us - scenario
        And I type a first name
        And I enter a email address
        And I type a subject
        And I type a question
        And I click on the send message button
        Then I should be presented with Successful message

    Scenario: valide feedback with dynamic data - scenario
        And I type a first name : "Med"
        And I enter a email : "med.exemple@gmail.com"
        And I type a subject : "this is the subject"
        And I type a question : "and this is the question"
        And I click on the send message button
        Then I should be presented with Successful message
    @skip
    Scenario: valide feedback with random dynamic data - scenario
        And I type a random first name
        And I enter a random email
        And I type a random subject
        And I type a random question
        And I click on the send message button
        Then I should be presented with Successful message