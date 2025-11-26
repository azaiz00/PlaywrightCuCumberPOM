import { When, Then } from '@cucumber/cucumber'
import type { CustomWorld } from '../support/world'
import { LoginPage } from '../../pages/LoginPage'
import { AccountActivity } from '../../pages/ActivityAccount'

// Negative scenario steps 

When("I login with valid credentials", async function (this: CustomWorld) {
    this.loginPage = new LoginPage(this.page)
    await this.loginPage.login("username", "password")
    await this.loginPage.goto("/bank/account-activity.html")

});

Then("I should be logged in", async function (this: CustomWorld) {
    const accountActivityPage = new AccountActivity(this.page)
    await accountActivityPage.is_it_the_page()
})

// Negative scenario steps 

When("I login with invalid credentials", async function (this: CustomWorld) {
    this.loginPage = new LoginPage(this.page)
    await this.loginPage.login("wrongusername", "wrongpassword")
});

Then("I should see a login error", async function (this: CustomWorld) {
    //this.loginPage = new LoginPage(this.page)
    await this.loginPage.expectLoginError()

})

