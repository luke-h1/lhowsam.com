import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

const baseURL = process.env.BASE_URL ?? 'http://127.0.0.1:3000';
const isCI = Boolean(process.env.CI);

export default defineConfig({
  testDir: './e2e',
  timeout: isCI ? 60_000 : 30_000,
  expect: {
    timeout: isCI ? 15_000 : 5_000,
  },
  workers: isCI ? 1 : 2,
  reporter: isCI
    ? [['line'], ['github'], ['html', { open: 'never' }]]
    : 'line',
  use: {
    baseURL,
    actionTimeout: isCI ? 30_000 : 15_000,
    navigationTimeout: isCI ? 30_000 : 15_000,
    // extraHTTPHeaders:
    //   process.env.PUBLIC_BASIC_AUTH_USER &&
    //   process.env.PUBLIC_BASIC_AUTH_PASSWORD
    //     ? {
    //         Authorization: `Basic ${Buffer.from(
    //           `${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASSWORD}`,
    //         ).toString('base64')}`,
    //       }
    //     : undefined,
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
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
  webServer: isCI
    ? {
        command: 'bun run dev -- --host 127.0.0.1 --port 3000',
        port: 3000,
        reuseExistingServer: false,
        timeout: 180_000,
      }
    : undefined,
});
