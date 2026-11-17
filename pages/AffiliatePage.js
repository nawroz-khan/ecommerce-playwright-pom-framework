class AffiliatePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.affiliateFooterLink = page.getByRole('link', { name: 'Affiliate', exact: true });

    this.company = page.locator('#input-company');
    this.website = page.locator('#input-website');
    this.taxId = page.locator('#input-tax');
    this.chequePayee = page.locator('#input-cheque');
    this.chequePayment = page.getByRole('radio', { name: 'Cheque' });
    this.editAffiliateLink = page.getByRole('link', { name: 'Edit your affiliate information' });
    this.affiliateHeading = page.getByRole('heading', { name: 'My Affiliate Account' });

    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.successAlert = page.locator("div.alert.alert-success.alert-dismissible");
  }

  async openFromFooter() {
    await this.affiliateFooterLink.click();
    if (await this.editAffiliateLink.isVisible()) {
      await this.editAffiliateLink.click();
    }
  }

  async fillAffiliateForm({ company, website, taxId, payeeName }) {
    const formReady = await this.company
      .waitFor({ state: 'visible', timeout: 8000 })
      .then(() => true)
      .catch(() => false);

    if (!formReady) {
      return false;
    }

    if (await this.chequePayment.count()) {
      await this.chequePayment.check();
    }

    await this.company.fill(company);
    await this.website.fill(website);
    await this.taxId.fill(taxId);
    await this.chequePayee.fill(payeeName);
    return true;
  }

  async submit() {
    await this.continueButton.click();
  }

  async expectSuccessContains(expect, text) {
    await expect(this.successAlert).toBeVisible();
    await expect(this.successAlert).toContainText(text);
  }
}

module.exports = { AffiliatePage };