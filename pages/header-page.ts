import { Page } from '@playwright/test';

export class HeaderPage {
  readonly searchInput = this.page.locator('#search-desktop');
  readonly mobileSearchInput = this.page.locator('#search-mobile');

  constructor(public readonly page: Page) {}
}
