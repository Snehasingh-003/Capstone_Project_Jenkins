import { expect } from "@playwright/test";
import { mytest } from "../../Fixture/TestFixture";
import { LoginPage } from "../../Pages/LoginPage";
import { OpenAccountpage } from "../../Pages/OpenAccountPage";
import { AccountsOverviewPage } from "../../Pages/AccountsOverviewPage";
import Login_Data from "../../Test_Data/Login_Data.json";

mytest('@e2e Verifying Account Creation through UI and then Validating it through API',
async ({ page, request, testData }) => {
   
   // Login
   const LP = new LoginPage(page);

   await page.goto(testData.url);

   await LP.username_click(Login_Data.username);

   await LP.passwd_click(Login_Data.password);

   await LP.login_btn();

   // Opening Account
   const OAP = new OpenAccountpage(page);

   await OAP.click_open_acc_link();

   await OAP.select_saving_acc();

   await OAP.click_open_acc();

   await OAP.verify_success_message();

   // Accounts Overview
   const AOP = new AccountsOverviewPage(page);

   await AOP.click_accounts_overview();

   // Capture latest created account number
   const accountNumber = await AOP.capture_recent_created_account();

   // API Validation
   const response = await request.get(
      `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountNumber}`,{
         headers:{
            'Accept':'application/json'
         },
      }
   );

   console.log("Response Status:", response.status());

   expect(response.status()).toBe(200);

   const res_body = await response.json();

   console.log("API Response:", res_body);

   // checking if  Account Exists
   expect(res_body.id.toString()).toBe(accountNumber);

   // Validating the Account Type
   console.log("Account Type",res_body.type);
   expect(res_body.type).toBe("SAVINGS");

   // Validating Balance is Number
   console.log("Balance of account:",res_body.balance);
   expect(typeof res_body.balance).toBe("number");
   

});