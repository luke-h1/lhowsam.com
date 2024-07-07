import type { PlaywrightTestConfig } from '@playwright/test';
import commonConfig from './playwright-common.config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const btoa = (str: string) => Buffer.from(str).toString('base64');
const credentialsBase64 = btoa(
  `${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASSWORD}`,
);

const config: PlaywrightTestConfig = {
  ...commonConfig,
  workers: 2,
  fullyParallel: true,
  use: {
    extraHTTPHeaders: {
      Authorization: `Basic ${credentialsBase64}`,
    },
  },
};

export default config;
