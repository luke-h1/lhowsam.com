import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 30 * 1000,
  expect: {
    timeout: 10000,
  },
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: [['list'], ['html']],
  use: {
    baseURL: process.env.BASE_URL ?? 'http://127.0.0.1:4321',
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
  webServer: {
    command: 'bun run dev -- --host 127.0.0.1 --port 4321',
    url: process.env.BASE_URL ?? 'http://127.0.0.1:4321',
    timeout: 20000,
    reuseExistingServer: !process.env.CI,
  },
});
