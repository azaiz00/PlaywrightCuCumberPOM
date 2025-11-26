import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  readonly signInButton: Locator;
  readonly feedBackButton: Locator;

  constructor(page: Page) {
    super(page);
    this.signInButton = this.page.locator("#signin_button")
    this.feedBackButton = this.page.locator("#feedback")

  }

  async visit() {
    await this.goto("/index.html");
  }

  async clickSignIn() {
    await this.signInButton.click();
  }
  async clickFeedBack() {
    await this.feedBackButton.click();
  }
}
