import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    // Perform authentication steps. Replace these actions with your own.
    await page.goto('https://sso-rhsso-rhsso.apps.pve-sno.office.stakater.com/auth/admin/');
    await page.locator("input[name='username']").fill(process.env.USERNAME);
    await page.locator("input[name='password']").fill(process.env.PASSWORD);
    await page.locator("input[type='submit']").click();
    // Wait until the page receives the cookies.
    //
    // Sometimes login flow sets cookies in the process of several redirects.
    // Wait for the final URL to ensure that the cookies are actually set.
    await page.waitForURL('https://sso-rhsso-rhsso.apps.pve-sno.office.stakater.com/auth/admin/master/console/#/realms/master');
    // End of authentication steps.

    await page.context().storageState({ path: authFile });
});
