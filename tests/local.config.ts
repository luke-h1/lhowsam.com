/* eslint-disable no-unneeded-ternary */
import { PlaywrightTestConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import { isMac, projectRoot } from './src/utils/config';

dotenv.config({ path: `${projectRoot}/.env.local` });

const config: PlaywrightTestConfig = {
  testDir: './src/tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 7000,
  },
  retries: 0,
  reporter: 'line',
  use: {
    screenshot: 'only-on-failure',
    colorScheme: 'dark',
    navigationTimeout: 10000,
    launchOptions: {
      timeout: 5000,
      slowMo: isMac ? 1000 : 0,
    },
    acceptDownloads: true,
    deviceScaleFactor: 0.75,
    headless: isMac ? false : true,
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
