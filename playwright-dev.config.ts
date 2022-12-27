import type { PlaywrightTestConfig } from '@playwright/test';
import commonConfig from './playwright-common.config';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const credentials = {
  username: process.env.BASIC_AUTH_USER,
  password: process.env.BASIC_AUTH_PASSWORD,
};

const btoa = (str: string) => Buffer.from(str).toString('base64');
const credentialsBase64 = btoa(
  `${credentials.username}:${credentials.password}`,
);

const config: PlaywrightTestConfig = {
  ...commonConfig,
  use: {
    extraHTTPHeaders: {
      Authorization: `Basic ${credentialsBase64}`,
    },
  },
};

export default config;
