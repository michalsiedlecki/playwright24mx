import { Page } from '@playwright/test';

export class SearchPage {
  readonly productTitle = this.page.locator('.m-product-card-info');

  constructor(public readonly page: Page) {}
}
