// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
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
};
module.exports = createJestConfig(customJestConfig);
