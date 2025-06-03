import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const commonConfig: PlaywrightTestConfig = {
  testDir: './e2e',
  timeout: 30 * 1000,
  name: 'lhowsam.com E2E Tests',
  expect: {
    timeout: 30000,
  },
  workers: 4,
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'line',
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
