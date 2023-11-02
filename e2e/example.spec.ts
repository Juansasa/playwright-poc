import { test, expect } from '@playwright/test';

test('login to master realm', async ({ page }) => {
  await page.goto('https://sso-rhsso-rhsso.apps.pve-sno.office.stakater.com/auth/admin/master/console/#/realms/master');

  // Expect a title "to contain" a substring.
  await expect(page.getByLabel("Display name")).toBeVisible()
  await expect(page.locator("input[name='displayName']")).toHaveValue("rh-sso")
});

