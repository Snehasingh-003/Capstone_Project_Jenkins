import { Page } from "@playwright/test";
import LoginLocator from "../Locator/LoginLocator";

//constructor is used to receive the Playwright Page object when creating the class

export class LoginPage{
   LO:LoginLocator;
  constructor(public page:Page){
    this.LO = new LoginLocator(page);
  }
  async navigateTo(url:string){
      await this.page.goto(url);
  }
  async username_click(username:string){
    await this.LO.username().fill(username);
  }
   async passwd_click(passwd:string){
    await this.LO.password().fill(passwd);
  }
  async login_btn(){
    await this.LO.login_btn().click();
  }
}