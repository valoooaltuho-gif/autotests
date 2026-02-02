import { Page } from '@playwright/test';

const UI = {
  selectCountryBtn: (page: Page) => page.getByRole('button', { name: 'Выбрать страну' }),
};


export class HomePage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/'); // Базовый URL возьмем из конфига
  }

  async clickSelectCountry() {
    await UI.selectCountryBtn(this.page).click();
  }
}
