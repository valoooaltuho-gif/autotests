import { test as base } from '@playwright/test';
import { HomePage } from './pages/home-page';
import { SelectCntrAndLangPage } from './pages/select_cntr_and_lang-page';
import { UserClient } from './pages/api/user-client';
import { SHOP_URI } from '../playwright.config';

type MyFixtures = {
  homePage: HomePage;
  userClient: UserClient;
  selectCntrAndLangPage: SelectCntrAndLangPage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  userClient: async ({ request }, use) => {
    
    const userClient = new UserClient(request, SHOP_URI);
    await use(userClient);
  },

  selectCntrAndLangPage: async ({ page }, use) => {
    const selectCntrAndLangPage = new SelectCntrAndLangPage(page);
    await use(selectCntrAndLangPage);
  },
});

export { expect } from '@playwright/test';
