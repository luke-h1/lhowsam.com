// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@frontend/(.*)$': '<rootDir>/frontend/$1',
  },
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  testMatch: [
    '<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}',
    '<rootDir>/src/__tests__/**/*.(test).{js,jsx,ts,tsx}',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testEnvironment: 'jest-environment-jsdom',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  resetMocks: true,
  snapshotSerializers: ['jest-serializer-html'],
};
module.exports = createJestConfig(customJestConfig);
