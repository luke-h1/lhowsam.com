/** @type {import('jest').Config} */

const config = {
  globals: {
    'babel-jest': {},
  },
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  verbose: true,
  testMatch: [
    '<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}',
    '<rootDir>/test/**/*.(test).{js,jsx,ts,tsx}',
  ],
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
  transform: {
    '^.+\\.(t|j)sx?$': ['babel-jest'],
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/test/fileTransform.js',
  },
  moduleNameMapper: {
    '^@frontend/(.*)$': '<rootDir>/src/$1',
    '^@frontend-test/(.*)$': '<rootDir>/test/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  resetMocks: true,
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  snapshotSerializers: ['jest-serializer-html'],
  coverageThreshold: {
    global: {
      statements: 93.8,
      branches: 85,
      lines: 95,
      functions: 96,
    },
  },
};
module.exports = config;
