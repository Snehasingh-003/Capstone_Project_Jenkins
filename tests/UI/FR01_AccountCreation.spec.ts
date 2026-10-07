import { expect, test } from "@playwright/test";
import { LoginPage } from "../../Pages/LoginPage";
import { OpenAccountpage } from "../../Pages/OpenAccountPage";
import Login_Data from "../../Test_Data/Login_Data.json";
import { AccountsOverviewPage } from "../../Pages/AccountsOverviewPage";
import { mytest } from "../../Fixture/TestFixture";
import Assert from "../../Utils/Assertions";

mytest('@smoke verify user login',async({page,testData})=>{

    const LP = new LoginPage(page);

    await page.goto(testData.url);

    await LP.username_click(Login_Data.username);

    await LP.passwd_click(Login_Data.password);
    
    await LP.login_btn();

    const assertion = new Assert(page);

    await assertion.verifyURL("https://parabank.parasoft.com/parabank/overview.htm");

    const OAP = new OpenAccountpage(page);

    await OAP.click_open_acc_link();

    await OAP.select_saving_acc();

    await OAP.click_open_acc();

    await OAP.verify_success_message();

    const AOP = new AccountsOverviewPage(page);

    await AOP.click_accounts_overview();

    const accountNumber = await AOP.capture_recent_created_account();
    
})