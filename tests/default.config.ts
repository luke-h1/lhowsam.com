// eslint-disable-next-line @typescript-eslint/no-explicit-any
const defaultConfig: Partial<Cypress.ConfigOptions<any>> = {
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
};
export default defaultConfig;
