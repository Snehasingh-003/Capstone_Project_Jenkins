import { Page, Locator } from "@playwright/test";

export default class AccountsOverviewLocator {
     public page:Page;
    constructor( page: Page) {
        this.page=page;
    }

    accounts_overview_link(): Locator {
        return this.page.locator('text=Accounts Overview');
    }

    account_table(): Locator {
        return this.page.locator('#accountTable');
    }
    recent_created_account(): Locator {
       return this.page.locator('#accountTable tbody tr td a').last();
    }
}