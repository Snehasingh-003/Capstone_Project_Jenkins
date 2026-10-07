# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E\FR01_AccountCreation_E2E.spec.ts >> @e2e Verifying Account Creation through UI and then Validating it through API
- Location: tests\E2E\FR01_AccountCreation_E2E.spec.ts:8:7

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('link', { name: 'Open New Account' })

```

# Test source

```ts
  1  | import { Page, expect } from "@playwright/test";
  2  | import OpenaccountLocator from "../Locator/OpenAccountLocator";
  3  | 
  4  | export class OpenAccountpage{
  5  |     OAL:OpenaccountLocator;
  6  | 
  7  |     constructor(public page:Page){
  8  |         this.OAL = new OpenaccountLocator(page);
  9  |     }
  10 | 
  11 |     async click_open_acc_link(){
> 12 |         await this.OAL.open_acc_link().click();
     |                                        ^ Error: locator.click: Test ended.
  13 |     }
  14 | 
  15 |     async select_saving_acc(){
  16 |         await this.OAL.acc_type_dropdown().selectOption("SAVINGS");
  17 |         
  18 |     }
  19 | 
  20 |     async select_checking_acc(){
  21 |         await this.OAL.acc_type_dropdown().selectOption("CHECKING");
  22 |     }
  23 | 
  24 |     async click_open_acc(){
  25 |         await expect(this.OAL.open_acc_btn()).toBeVisible();
  26 |         await expect(this.OAL.open_acc_btn()).toBeEnabled();
  27 |         await this.OAL.open_acc_btn().click();
  28 |     }
  29 | 
  30 |      async verify_success_message() {
  31 |           const text = await this.OAL.success_msg().textContent();
  32 |          console.log(text);
  33 |         await expect(this.OAL.success_msg()).toContainText('Account Opened!');
  34 |     }
  35 |    
  36 | 
  37 |     async capture_account_number() {
  38 |         return await this.OAL.shown_acc_number().innerText();
  39 |     }
  40 | 
  41 | }
```