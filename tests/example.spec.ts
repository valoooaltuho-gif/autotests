import { test, expect } from './fixtures';

test('small test', async ({ homePage,selectCntrAndLangPage, page }) => {
  await homePage.goto();
  await homePage.clickSelectCountry();
  await selectCntrAndLangPage.selectCountry("Россия");

});

