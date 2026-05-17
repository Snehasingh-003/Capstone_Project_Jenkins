# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\FR01_AccountAPI.spec.ts >> Accounts API Validation >> @api Verifying GET Accounts API
- Location: tests\API\FR01_AccountAPI.spec.ts:9:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "26109"
Received: [Function toString]
```

# Test source

```ts
  1  | import { Page,test, expect, APIResponse } from "@playwright/test";
  2  | import Login_Data from "../../Test_Data/Login_Data.json";
  3  | import OpenaccountLocator from "../../Locator/OpenAccountLocator";
  4  | import { OpenAccountpage } from "../../Pages/OpenAccountPage";
  5  | import AccountData from "../../Test_Data/AccountData.json";
  6  | 
  7  | test.describe('Accounts API Validation', () => {
  8  | 
  9  |   test('@api Verifying GET Accounts API',async ({ request }) => {
  10 | 
  11 |      const acc_num_from_UI = AccountData.accountNumber;
  12 | 
  13 |       console.log("using UI fetched acc_number:",acc_num_from_UI);
  14 | 
  15 |       expect(acc_num_from_UI).not.toBe('');
  16 | 
  17 |       const response:APIResponse = await request.get(`https://parabank.parasoft.com/parabank/services/bank/accounts/${acc_num_from_UI}`,{
  18 |           headers: {
  19 |             'Accept': 'application/json'
  20 |         },
  21 |       }
  22 |       )
  23 | 
  24 |       console.log('Response status of valid accountID',response.status());
  25 | 
  26 |       expect(response.status()).toBe(200);
  27 | 
  28 |       const res_body = await response.json();
  29 |       
  30 |       console.log("Response body:",res_body);
  31 |       //account id matching
> 32 |       expect(res_body.id.toString).toBe(acc_num_from_UI);
     |                                    ^ Error: expect(received).toBe(expected) // Object.is equality
  33 | 
  34 |       //account type 
  35 |     //  const accountType = res_body.match(/<type>(.*?)<\/type>/)?.[1];
  36 |     //  console.log("Account Type:", accountType);
  37 | 
  38 |     //  // Validate account type
  39 |     //  expect(accountType).toBe("CHECKING");
  40 | 
  41 |     //   //balance type checking
  42 |     //   const balanceValue = Number(res_body.match(/<balance>(.*?)<\/balance>/)?.[1]);
  43 |     //   expect(isNaN(balanceValue)).toBeFalsy();
  44 |     });
  45 | 
  46 |     // test('Verifying API  response for invalid account ID',
  47 |     //     async ({ request }) => {
  48 |     //         const invalidAccountId = 999999999;
  49 |     //         const response = await request.get( `https://parabank.parasoft.com/parabank/services/bank/accounts/${invalidAccountId}`);
  50 |     //        console.log('Response status of InvalidID:',response.status());
  51 |     //        const responseBody = await response.text();
  52 |     //         expect(response.status()).not.toBe(200);
  53 |     //  });
  54 | })
```