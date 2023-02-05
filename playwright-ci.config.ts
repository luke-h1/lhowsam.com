import type { PlaywrightTestConfig } from '@playwright/test';
import commonConfig from './playwright-common.config';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
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
