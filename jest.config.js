// eslint-disable-next-line @typescript-eslint/no-var-requires

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
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
  transform: {
    '^.+\\.(t|j)sx?$': ['babel-jest'],
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/test/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^@frontend/(.*)$': '<rootDir>/src/$1',
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
};
module.exports = config;
