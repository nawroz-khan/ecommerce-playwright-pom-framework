class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Header / top navigation
    this.myAccountIcon = page.locator('.fa-solid.fa-user');
    this.laptopsAndNotebooksMenu = page.getByRole('link', { name: 'Laptops & Notebooks', exact: true });
    this.showAllLaptopsAndNotebooks = page.getByRole('link', { name: 'Show All Laptops & Notebooks' });
    this.checkoutLink = page.getByRole('link', { name: ' Checkout' });

    // My Account dropdown links
    this.loginLink = page.getByRole('link', { name: 'Login' });
  }

  async goto() {
    await this.page.goto('https://cloudberrystore.services/');
  }

  async openMyAccount() {
    // In your original tests you used the user icon (more stable than role text)
    await this.myAccountIcon.click();
  }

  async clickLogin() {
    await this.loginLink.click();
  }

  async openAllLaptopsAndNotebooks() {
    // The top-level category link goes to the same listing as "Show All".
    // The submenu item is hidden until hover and times out in headless WebKit.
    await this.laptopsAndNotebooksMenu.click();
  }

  async goToCheckout() {
    await this.checkoutLink.click();
  }
}

module.exports = { HomePage };