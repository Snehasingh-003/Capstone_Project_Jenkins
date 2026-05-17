import { Page, expect } from "@playwright/test";
import OpenaccountLocator from "../Locator/OpenAccountLocator";

export class OpenAccountpage{
    OAL:OpenaccountLocator;

    constructor(public page:Page){
        this.OAL = new OpenaccountLocator(page);
    }

    async click_open_acc_link(){
        await this.OAL.open_acc_link().click();
    }

    async select_saving_acc(){
        await this.OAL.acc_type_dropdown().selectOption("SAVINGS");
        
    }

    async select_checking_acc(){
        await this.OAL.acc_type_dropdown().selectOption("CHECKING");
    }

    async click_open_acc(){
        await expect(this.OAL.open_acc_btn()).toBeVisible();
        await expect(this.OAL.open_acc_btn()).toBeEnabled();
        await this.OAL.open_acc_btn().click();
    }

     async verify_success_message() {
          const text = await this.OAL.success_msg().textContent();
         console.log(text);
        await expect(this.OAL.success_msg()).toContainText('Account Opened!');
    }
   

    async capture_account_number() {
        return await this.OAL.shown_acc_number().innerText();
    }

}