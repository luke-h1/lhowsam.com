import { PlaywrightTestConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import { projectRoot } from './src/utils/config';

dotenv.config({ path: `${projectRoot}/.env.local` });

const config: PlaywrightTestConfig = {
  testDir: './src/tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 7000,
  },
  forbidOnly: !!process.env.CI,
  retries: !process.env.CI ? 2 : 0,
  workers: !process.env.CI ? 2 : 1,
  reporter: 'line',
  use: {
    screenshot: 'only-on-failure',
    colorScheme: 'dark',
    navigationTimeout: 5000,
    launchOptions: {
      timeout: 5000,
      slowMo: parseInt(process.env.SLOW_MO, 10),
    },
    acceptDownloads: true,
    deviceScaleFactor: 0.75,
    headless: !process.env.HEADLESS,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    actionTimeout: 0,
    trace: 'on-first-retry',
    defaultBrowserType: 'chromium',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'test-results/',
};
export default config;
