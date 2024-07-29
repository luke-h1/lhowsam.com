import type { PlaywrightTestConfig } from '@playwright/test';
import commonConfig from './playwright-common.config';

const config: PlaywrightTestConfig = {
  ...commonConfig,
  workers: 4,
  fullyParallel: true,
  webServer: [
    {
      command: 'pnpm start',
      port: 3000,
      timeout: 20000,
      reuseExistingServer: true,
    },
  ],
  retries: 2,
};

export default config;
