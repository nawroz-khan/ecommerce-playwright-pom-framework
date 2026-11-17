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
  

  await affiliate.openFromFooter();
  const filled = await affiliate.fillAffiliateForm({
    company: 'CloudBerry',
    website: 'cloudberry.services',
    taxId: '12345',
    payeeName: 'Sid',
  });

  if (filled) {
    await affiliate.submit();
    await affiliate.expectSuccessContains(expect, 'Success');
  } else {
    // This store account is already an affiliate, so OpenCart shows the account section
    // instead of a blank registration form.
    await expect(affiliate.affiliateHeading).toBeVisible();
  }
});