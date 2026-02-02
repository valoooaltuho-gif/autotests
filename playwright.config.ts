import { defineConfig, devices } from '@playwright/test';


export const SHOP_URI = 'https://api.siberianhealth.com/';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://shop.siberianhealth.com/',
    extraHTTPHeaders: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Origin': 'https://shop.siberianhealth.com',
      'Referer': 'https://shop.siberianhealth.com',
      'app': 'BuySiberian',
      'device': 'android',
    },
    headless: false,
    screenshot: 'on',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
    ,
  ],
});
