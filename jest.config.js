module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
    },
  },
  testMatch: ['**/**/*.test.+(ts|tsx|js)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/lib/', '/public/', '.cache'],
  verbose: true,
  testURL: 'http://localhost/',
};
