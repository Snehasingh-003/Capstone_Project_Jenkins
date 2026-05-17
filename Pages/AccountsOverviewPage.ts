import { Page, expect } from "@playwright/test";

import AccountsOverviewLocator from "../Locator/AccountsOverviewLocator";

export class AccountsOverviewPage {

    AOL: AccountsOverviewLocator;

    constructor(public page: Page) {
        this.AOL = new AccountsOverviewLocator(page);
    }

    async click_accounts_overview() {
         await this.AOL.accounts_overview_link().click();
    }

    async capture_recent_created_account() {
      const accNumber = await this.AOL.recent_created_account().innerText();
      console.log('Captured newly created acc_num from table:',accNumber);
      return accNumber.trim();
     }
}