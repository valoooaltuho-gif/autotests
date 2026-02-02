import { test, expect } from './fixtures';

test('успешный переход в документацию', async ({ homePage,selectCntrAndLangPage, page }) => {
  await homePage.goto();
  await homePage.clickSelectCountry();
  await selectCntrAndLangPage.selectCountry("Россия");

});

