import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class FeedBackPage extends BasePage {
    readonly usernameInput: Locator;
    readonly emailInput: Locator;
    readonly subjectInput: Locator;
    readonly commentInput: Locator;
    readonly successMessage: Locator

    readonly submitButton: Locator;
    readonly clearButton: Locator;



    constructor(page: Page) {
        super(page);
        this.usernameInput = this.page.locator("#name");
        this.emailInput = this.page.locator("#email");
        this.subjectInput = this.page.locator("#subject");
        this.commentInput = this.page.locator("#comment");

        this.submitButton = this.page.getByRole("button", { name: "Send Message" });
        this.clearButton = this.page.getByRole("button", { name: "clear" });

        this.successMessage = this.page.getByText(/Thank you for your comments/i)
    }

    async feedBackFillUserName(name: string) {
        // fill feedBack name 
        await this.usernameInput.fill(name);
    }
    async feedBackFillEmail(email: string) {
        // fill feedBack email 
        await this.emailInput.fill(email)
    }

    async feedBackFillSubject(subject: string) {
        // fill feedBack subject 
        await this.subjectInput.fill(subject)
    }

    async feedBackFillComment(comment: string) {
        // fill feedBack comment 
        await this.commentInput.fill(comment)
    }

    async SendfeedBack() {
        // Send feed Back
        await this.submitButton.click();
    }

    async assertFeedBackSendedSccessfuly() {
        await expect(this.successMessage).toBeVisible()
        //await this.successMessage.waitFor()
    }

    //     async feedBackAndClear(name: string, email: string, subject: string, comment: string) {
    //         // fill feedBack form 
    //         await this.usernameInput.fill(name);
    //         await this.emailInput.fill(email)
    //         await this.subjectInput.fill(subject)
    //         await this.commentInput.fill(comment)
    //         //clear
    //         await this.clearButton.click();
    //         // chech if its cleared  
    //         await expect(this.usernameInput).toBeEmpty()
    //         await expect(this.emailInput).toBeEmpty()
    //         await expect(this.subjectInput).toBeEmpty()
    //         await expect(this.commentInput).toBeEmpty()

    //     }

}
