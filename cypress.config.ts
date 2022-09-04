/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/extensions */
import { defineConfig } from 'cypress';

export default defineConfig({
  blockHosts: ['*.google-analytics.com', '*.googletagmanager.com'],
  defaultCommandTimeout: 5000,
  video: false,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  waitForAnimations: true,
  viewportHeight: 1920,
  viewportWidth: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config);
    },
    baseUrl: 'http://localhost:3000',
  },
});
