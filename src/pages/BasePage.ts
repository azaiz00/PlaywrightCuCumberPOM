import { Page, expect , BrowserContext} from "@playwright/test";

export abstract class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(path: string) {
        await this.page.goto(`http://zero.webappsecurity.com${path}`);
    }

    async expectUrlContains(fragment: string) {
        await expect(this.page).toHaveURL(new RegExp(fragment));
        
    }
}
