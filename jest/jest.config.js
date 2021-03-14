// Jest.config.js
module.exports = {
  clearMocks: true,
  coverageDirectory: '.coverage',
  testRegex: '(.*|(\\.|/)(test|spec))\\.tsx?$',

  setupFilesAfterEnv: ['./jest.setup.js'],
};
