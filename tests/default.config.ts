// eslint-disable-next-line @typescript-eslint/no-explicit-any
import * as Cypress from 'cypress';

const defaultConfig: Omit<Cypress.ConfigOptions<unknown>, 'e2e'> = {
  blockHosts: [
    '*.google-analytics.com',
    '*.googletagmanager.com',
    '*.vercel.analytics.com',
  ],
  defaultCommandTimeout: 5000,
  nodeVersion: 'system',
  video: false,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  waitForAnimations: true,
  viewportHeight: 1920,
  viewportWidth: 1080,
};
export default defaultConfig;
