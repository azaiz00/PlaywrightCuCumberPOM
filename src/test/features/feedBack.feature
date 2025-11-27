@EN-44
@REQ_EN-37
Feature: create feedback form

	Background:
		#@PRECOND_EN-41
		Given I am on the home page
		When I click on the feedback button

	@TEST_EN-40 @TESTSET_EN-42
	Scenario: valide feedback us - scenario
		When I type a first name
		When I enter a email address
		When I type a subject
		When I type a question
		When I click on the send message button
		Then I should be presented with Successful message
		
	@TEST_EN-45 @TESTSET_EN-42
	Scenario: valide feedback with dynamic data - scenario
		When I type a first name : "Med"
		When I enter a email : "med.exemple@gmail.com"
		When I type a subject : "this is the subject"
		When I type a question : "and this is the question"
		When I click on the send message button
		Then I should be presented with Successful message
		
	@TEST_EN-46 @TESTSET_EN-42
	Scenario: valide feedback with random dynamic data - scenario
		When I type a random first name
		When I enter a random email
		When I type a random subject
		When I type a random question
		When I click on the send message button
		Then I should be presented with Successful message