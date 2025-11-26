import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = this.page.locator("#user_login");
        this.passwordInput = this.page.locator("#user_password");
        this.submitButton = this.page.getByRole("button", { name: "Sign in" });
        this.errorMessage = this.page.locator(".alert-error");
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    };

    async fillUserName(username: string) {
        await this.usernameInput.fill(username);
    };

    async fillUserPassword(password: string) {
        await this.passwordInput.fill(password);
    };
    async clickLoginButton(){
        await this.submitButton.click()
    }

    async expectLoginError() {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toContainText(
            "Login and/or password are wrong."
        );
    }
}
