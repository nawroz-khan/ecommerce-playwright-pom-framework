class CategoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async openProductByName(productName) {
    await this.page.getByRole('link', { name: productName, exact: true }).first().click();
  }
}

module.exports = { CategoryPage };