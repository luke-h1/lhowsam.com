import type { PlaywrightTestConfig } from '@playwright/test';
import commonConfig from './playwright-common.config';

const config: PlaywrightTestConfig = {
  ...commonConfig,
  webServer: [
    {
      command: 'pnpm start',
      port: 3000,
      timeout: 20000,
      reuseExistingServer: true,
    },
  ],
};

export default config;
