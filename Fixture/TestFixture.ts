import { test as base }
from "@playwright/test";

export const mytest = base.extend<{
    testData: {
        url: string;
    }
    }>({
    testData: async ({}, use) => {
        await use({
            url:
            // 'http://localhost:9090/parabank/'
            'https://parabank.parasoft.com'
        });
    }
});