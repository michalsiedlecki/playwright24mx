import { Page } from '@playwright/test';

export class ProductPage {
  readonly addToCartMsg = this.page.getByText('The product has been added to your cart');
  readonly sizeSelect = this.page.locator('.o-variations .m-select');
  readonly productSize = this.page.locator('.a-product-variation');
  readonly productTitle = this.page.getByTestId('product-title');
  readonly productPrice = this.page.getByTestId('product-price');
  readonly addToCart = this.page.locator('.m-button--purchase');

  constructor(public readonly page: Page) {}
}
