import { expect } from "@playwright/test";
import test from '@playwright/test'
import AccountData from '../../Test_Data/AccountData.json'
test('Verify API Response Time',async({request})=>{
    const start = Date.now();
    const res = await request.get(`https://parabank.parasoft.com/parabank/services/bank/accounts/${AccountData}`);
    const end = Date.now();
    const resTime = end-start;
    console.log("Response time of API is:",resTime);
    expect(resTime).toBeLessThan(3000);
})