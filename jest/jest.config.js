module.exports = {
  clearMocks: true,
  coverageDirectory: '.coverage',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  setupFilesAfterEnv: ['./jest.setup.js'],
};
