import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AccountActivity extends BasePage {
  readonly accountActivityLink: Locator
  readonly showTransactions: Locator
  readonly findTransactions: Locator

  constructor(page: Page) {
    super(page);
    this.accountActivityLink = this.page.getByRole("link", { name: "Account Activity" });
    this.showTransactions = this.page.getByRole("link", { name: "Show Transactions" });
    this.findTransactions = this.page.getByRole("link", { name: "Find Transactions" });
  }

  async visit() {
    await this.goto("/bank/account-activity.html");
  }

  async is_it_the_page() {
    await expect(this.page).toHaveURL('http://zero.webappsecurity.com/bank/account-activity.html')
    await expect(this.showTransactions).toBeVisible()
    await this.showTransactions.click()
  }

  async findTransactionsTab() {
    this.findTransactions.click()
  }

  async showTransactionsTab() {
    this.showTransactions.click()
  }

}
