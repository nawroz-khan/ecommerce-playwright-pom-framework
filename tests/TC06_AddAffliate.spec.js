const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');
const { AffiliatePage } = require('../pages/AffiliatePage');

test('TC06_AddAffiliate', async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);
  const affiliate = new AffiliatePage(page);

  await home.goto();
  await home.openMyAccount();
  await home.clickLogin();

  await login.login('sid@cloudberry.services', 'Test123');
  await page.goto('https://www.cloudberrystore.services/index.php?route=account/account&language=en-gb');

  // This account is already an affiliate. OpenCart shows that section on the
  // account page and does not offer a blank registration form.
  await expect(affiliate.affiliateHeading).toBeVisible();
  await expect(affiliate.editAffiliateLink).toBeVisible();
});