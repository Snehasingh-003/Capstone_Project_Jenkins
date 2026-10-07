import { Page,test, expect, APIResponse } from "@playwright/test";
import Login_Data from "../../Test_Data/Login_Data.json";
import OpenaccountLocator from "../../Locator/OpenAccountLocator";
import { OpenAccountpage } from "../../Pages/OpenAccountPage";
import AccountData from "../../Test_Data/AccountData.json";

test.describe('Accounts API Validation', () => {

  test('@api Verifying GET Accounts API',async ({ request }) => {

     const acc_num_from_UI = AccountData.accountNumber;

      console.log("using UI fetched acc_number:",acc_num_from_UI);

      expect(acc_num_from_UI).not.toBe('');
  
      const response:APIResponse = await request.get(`https://parabank.parasoft.com/parabank/services/bank/accounts/${acc_num_from_UI}`,{
          headers: {
            'Accept': 'application/json'
        },
      }
      )

      console.log('Response status of valid accountID',response.status());

      expect(response.status()).toBe(200);

      const res_body = await response.json();
      
      console.log("Response body:",res_body);
      //account id matching
      expect(res_body.id.toString()).toBe(acc_num_from_UI);

      //account type 
      console.log("Account type",res_body.type);
      expect(res_body.type).toBe("CHECKING")

     // Validate account type
     console.log("Balance in account",res_body.balance);
     expect(typeof res_body.balance).toBe("number");
    });

    test('Verifying API  response for invalid account ID',
        async ({ request }) => {
            const invalidAccountId = 999999999;
            const response:APIResponse = await request.get( `https://parabank.parasoft.com/parabank/services/bank/accounts/${invalidAccountId}`,{
              headers:{
                'Accept':'application/json'
              },
            });
           console.log('Response status of InvalidID:',response.status());
           const responseBody = await response.json();
            expect(response.status()).not.toBe(200);
     });
})