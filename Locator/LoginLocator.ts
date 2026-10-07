import {Page, Locator} from "@playwright/test";

export default class LoginLocator{
    public page:Page;
    constructor(page: Page) {  
      this.page=page;
    }
    username():Locator{
        return this.page.locator('input[name="username"]');
    }
    password():Locator{
        return this.page.locator('input[name="password"]');
    }
    login_btn():Locator{
        return this.page.locator('input[value="Log In"]')
    }
}