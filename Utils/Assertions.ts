import { Page, expect } from '@playwright/test';

export default class Assert{

    constructor(public page:Page){

    }

    async verifyTitle(title: string): Promise<void> {
       await expect(this.page).toHaveTitle(new RegExp(title, 'i'));
    }

    async verifyURL(url: string ): Promise<void> {
        await expect(this.page).toHaveURL(url);
    }
    async verifyTextVisible(text: string): Promise<void> {
        await expect(this.page.getByText(text)).toBeVisible();
    }

}