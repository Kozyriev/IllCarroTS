import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {timeout: 5000},
  retries: 0,
  use: {
    baseURL: 'https://ilcarro.web.app/search',
    headless: false,
    viewport: { width: 1280, height: 720 },

  },
});
