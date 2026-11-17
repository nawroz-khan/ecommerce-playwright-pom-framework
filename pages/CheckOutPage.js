class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.loginPageLink = page.getByRole('link', { name: 'login page' });

    // Checkout controls
    this.shippingAddressSelect = page.locator('#input-shipping-address');
    this.shippingMethodsButton = page.locator('#button-shipping-methods');
    this.continueButton = page.getByRole('button', { name: 'Continue' });

    this.paymentMethodsButton = page.locator('#button-payment-methods');
    this.confirmOrderButton = page.getByRole('button', { name: 'Confirm Order' });

    this.orderPlacedHeading = page.getByRole('heading', { name: 'Your order has been placed!' });
  }

  async clickLoginPage() {
    await this.loginPageLink.click();
  }

  async selectShippingAddressByIndex(index) {
    await this.shippingAddressSelect.selectOption({ index });
  }

  async chooseFirstMethod(modalSelector, openButton) {
    await openButton.click();
    const modal = this.page.locator(modalSelector);
    await modal.waitFor({ state: 'visible' });

    const method = modal.locator('input[type="radio"]').first();
    if (await method.count()) {
      await method.check();
    }

    await modal.getByRole('button', { name: 'Continue' }).click();
    await modal.waitFor({ state: 'hidden' });
  }

  async continueShipping() {
    await this.chooseFirstMethod('#modal-shipping', this.shippingMethodsButton);
  }

  async continuePayment() {
    await this.chooseFirstMethod('#modal-payment', this.paymentMethodsButton);
  }

  async confirmOrder() {
    await this.confirmOrderButton.click();
  }

  async isOrderPlacedVisible() {
    return await this.orderPlacedHeading.isVisible();
  }
}

module.exports = { CheckoutPage };