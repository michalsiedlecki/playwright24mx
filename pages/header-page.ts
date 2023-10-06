import { Page } from '@playwright/test';

export class HeaderPage {
  readonly searchInput = this.page.locator('#search-desktop');

  constructor(public readonly page: Page) {}
}
