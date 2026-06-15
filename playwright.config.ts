import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

const baseURL = process.env.BASE_URL ?? 'http://127.0.0.1:3000';
const isCI = Boolean(process.env.CI);
const isLocal = baseURL.includes('127.0.0.1') || baseURL.includes('localhost');

export default defineConfig({
  testDir: './e2e',
  timeout: isCI ? 60_000 : 30_000,
  expect: {
    timeout: isCI ? 15_000 : 5_000,
  },
  workers: isCI ? 1 : 2,
  reporter: isCI ? [['line'], ['github'], ['html', { open: 'never' }]] : 'line',
  use: {
    baseURL,
    actionTimeout: isCI ? 30_000 : 15_000,
    navigationTimeout: isCI ? 30_000 : 15_000,
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        userAgent: 'e2e-test',
        launchOptions: {
          args: isCI
            ? ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
            : [],
        },
      },
    },
  ],
  outputDir: 'test-results/',
  fullyParallel: true,
  webServer:
    isCI && isLocal
      ? {
          command: 'bun run dev -- --host 127.0.0.1 --port 3000',
          port: 3000,
          reuseExistingServer: false,
          timeout: 180_000,
        }
      : undefined,
});
