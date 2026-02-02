import { Page } from '@playwright/test';

const UI = {
  countryItem: (page: Page) => page.locator('.country-list__item'),
};

export class SelectCntrAndLangPage {
  constructor(private readonly page: Page) {}


  async selectCountry(countryName: string) {
    await UI.countryItem(this.page)
      .filter({ hasText: countryName })
      .click();
  }
}