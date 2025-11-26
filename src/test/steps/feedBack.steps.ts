
import { Given, When, Then } from '@cucumber/cucumber'
import type { CustomWorld } from '../support/world'
import { FeedBackPage } from '../../pages/FeedBackPage'
import { faker } from '@faker-js/faker'

// commen feedback steps 

When('I click on the feedback button', async function (this: CustomWorld) {
    this.homePage.clickFeedBack()

});

When('I type a first name', async function (this: CustomWorld) {
    const feedBackPage = new FeedBackPage(this.page)
    await feedBackPage.feedBackFillUserName('name')
});

// end commen feedback steps */
When('I enter a email address', async function (this: CustomWorld) {
    const feedBackPage = new FeedBackPage(this.page)
    await feedBackPage.feedBackFillEmail('email.exemple@gmail.com')

});

When('I type a subject', async function (this: CustomWorld) {
    const feedBackPage = new FeedBackPage(this.page)
    await feedBackPage.feedBackFillSubject('This a test subject')
});

When('I type a question', async function (this: CustomWorld) {
    const feedBackPage = new FeedBackPage(this.page)
    await feedBackPage.feedBackFillComment('why i m here !! ')
});

// commen feedback steps 

When('I click on the send message button', async function (this: CustomWorld) {
    const feedBackPage = new FeedBackPage(this.page)
    await feedBackPage.SendfeedBack()
});

Then('I should be presented with Successful message', async function (this: CustomWorld) {
    const feedBackPage = new FeedBackPage(this.page)
    await feedBackPage.assertFeedBackSendedSccessfuly()
});

// end commen feedback steps */ 


// dyanamic data
When('I type a first name : {string}', async function (this: CustomWorld, name: string) {
    const feedBackPage = new FeedBackPage(this.page)
    await feedBackPage.feedBackFillUserName(name)
});


When('I enter a email : {string}', async function (this: CustomWorld, email: string) {
    const feedBackPage = new FeedBackPage(this.page)
    await feedBackPage.feedBackFillEmail(email)
});


When('I type a subject : {string}', async function (this: CustomWorld, subject: string) {
    const feedBackPage = new FeedBackPage(this.page)
    await feedBackPage.feedBackFillSubject(subject)
});

When('I type a question : {string}', async function (this: CustomWorld, question: string) {
    const feedBackPage = new FeedBackPage(this.page)
    await feedBackPage.feedBackFillComment(question)
});

// end dynamic data 


// faker random dynamic data 
const person = faker.person
When('I type a random first name', async function (this: CustomWorld) {
    const name = person.firstName();
    const feedBackPage = new FeedBackPage(this.page)
    await feedBackPage.feedBackFillUserName(name)
});

When('I enter a random email', async function (this: CustomWorld) {
    const email = faker.internet.email()
    const feedBackPage = new FeedBackPage(this.page)
    await feedBackPage.feedBackFillEmail(email)
});

When('I type a random subject', async function (this: CustomWorld) {
    const subject = person.jobArea()
    const feedBackPage = new FeedBackPage(this.page)
    await feedBackPage.feedBackFillSubject(subject)
});

When('I type a random question', async function (this: CustomWorld) {
    const question = person.jobDescriptor()
    const feedBackPage = new FeedBackPage(this.page)
    await feedBackPage.feedBackFillComment(question)

});

// end faker random dynamic data 