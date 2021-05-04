module.exports = {
  clearMocks: true,
  coverageDirectory: '.coverage',
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.tsx?$',
  setupFilesAfterEnv: ['./jest.setup.js'],
};
