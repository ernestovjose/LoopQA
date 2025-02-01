import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('Login to Demo App', async ({page})=>{
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.locator('#username').fill('admin');
    await page.locator('#password').fill('password123');
    await page.getByText('Sign in').click();
    await page.waitForTimeout(500);    
    await expect(page.locator('//h1[contains(text(), "Projects")]')).toBeVisible();
    await page.context().storageState({ path: authFile });
})