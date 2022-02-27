import { PlaywrightTestConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import { isMac, projectRoot } from './src/utils/config';

dotenv.config({ path: `${projectRoot}/.env.production` });
const config: PlaywrightTestConfig = {
  testDir: './src/tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 7000,
  },
  retries: 0,
  reporter: 'github',
  use: {
    screenshot: 'only-on-failure',
    colorScheme: 'dark',
    acceptDownloads: true,
    navigationTimeout: 5000,
    deviceScaleFactor: 0.75,
    launchOptions: {
      timeout: 5000,
      slowMo: isMac ? 1000 : 0,
    },
    headless: !isMac,
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
