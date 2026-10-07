import { Locator, Page } from "@playwright/test";
export default class OpenaccountLocator{
    public page:Page;
    constructor(page:Page){
        this.page=page;
    }
    open_acc_link():Locator{
        return this.page.getByRole('link',{name:'Open New Account'});
    }
    acc_type_dropdown():Locator{
        return this.page.locator('select[id="type"]');
    }
    from_acc_id():Locator{
        return this.page.locator('select[id="fromAccountId"]');
    }

    open_acc_btn(): Locator {
       return this.page.locator('input[value="Open New Account"]');
     }

    success_msg():Locator{
        return this.page.locator('#openAccountResult');
    }
    shown_acc_number():Locator{
        return this.page.locator('#newAccountId')
    }

}
