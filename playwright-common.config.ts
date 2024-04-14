import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const commonConfig: PlaywrightTestConfig = {
  testDir: './e2e',
  timeout: 30 * 1000,
  name: 'lhowsam.com E2E Tests',
  expect: {
    timeout: 30000,
  },
  retries: 0,
  reporter: [['list'], ['html'], ['github']],
  use: {
    actionTimeout: 20000,
    navigationTimeout: 20000,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
  outputDir: 'test-results/',
};

export default commonConfig;
