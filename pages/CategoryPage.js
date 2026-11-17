class CategoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async openProductByName(productName) {
    await this.page.locator('#product-list').getByText(productName, { exact: true }).click();
  }
}

module.exports = { CategoryPage };