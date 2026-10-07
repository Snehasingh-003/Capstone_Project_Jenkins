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
            'https://parabank.parasoft.com'
        });
    }
});


