import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const commonConfig: PlaywrightTestConfig = {
  testDir: './e2e',
  timeout: 30 * 1000,
  name: 'lhowsam.com E2E Tests',
  expect: {
    timeout: 30000,
  },
  workers: process.env.CI ? 1 : 4,
  fullyParallel: !process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'line',
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
        launchOptions: {
          args: process.env.CI
            ? ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
            : [],
        },
      },
    },
  ],
  outputDir: 'test-results/',
};

export default commonConfig;
