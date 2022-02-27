import { PlaywrightTestConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import { projectRoot } from './src/utils/config';

dotenv.config({ path: `${projectRoot}/.env.production` });
const config: PlaywrightTestConfig = {
  testDir: './src/tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 7000,
  },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 6 : undefined,
  reporter: 'html',
  use: {
    screenshot: 'only-on-failure',
    acceptDownloads: true,
    deviceScaleFactor: 0.75,
    headless: !!process.env.HEADLESS,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    actionTimeout: 0,
    trace: 'on-first-retry',
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
