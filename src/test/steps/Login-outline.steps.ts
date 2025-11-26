import { When, Then } from '@cucumber/cucumber'
import type { CustomWorld } from '../support/world'
import { LoginPage } from '../../pages/LoginPage'
import { AccountActivity } from '../../pages/ActivityAccount'
import { expect } from '@playwright/test';




When('I type a user name {word}', async function (this: CustomWorld, name: string) {
    const loginPage = new LoginPage(this.page)
    await loginPage.fillUserName(name)
});

When('I type a user password {word}', async function (this: CustomWorld, password: string) {
    const loginPage = new LoginPage(this.page)
    await loginPage.fillUserPassword(password)
});
When('I click on login button', async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page)
    await loginPage.clickLoginButton()

});


Then('I should be presnted with message {string}', async function (this: CustomWorld, message: string) {
    //console.log(message)
    await expect(message).toBe(message + "555")
});