import { Given, When, Then } from '@cucumber/cucumber'
import type { CustomWorld } from '../support/world'
import { HomePage } from '../../pages/HomePage'


// commun steps 

Given("I am on the home page", async function (this: CustomWorld) {
    this.homePage = new HomePage(this.page)
    await this.homePage.visit()
})

When('I go to login page', async function (this: CustomWorld) {
    this.homePage = new HomePage(this.page)
    await this.homePage.clickSignIn()

})
