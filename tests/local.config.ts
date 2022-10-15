/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/extensions */
import { defineConfig } from 'cypress';
import defaultConfig from './default.config';

export default defineConfig({
  ...defaultConfig,
  e2e: {
    setupNodeEvents(on, config) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires, import/extensions
      return require('../cypress/plugins/index.ts')(on, config);
    },
    baseUrl: 'http://localhost:3000',
  },
});
