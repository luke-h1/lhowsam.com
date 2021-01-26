// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
//     prefix: '<rootDir>/__tests__/',
//   }),
//   testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
// };

// Jest.config.js
module.exports = {
  clearMocks: true,
  coverageDirectory: '.coverage',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  setupFilesAfterEnv: ['./jest.setup.js'],
};
