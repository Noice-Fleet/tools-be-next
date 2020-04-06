module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['**/*.ts', '!**/node_modules/**'],
  coverageDirectory: './test/coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['text', 'lcov', 'json', 'clover'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  roots: ['test', 'src'],
  testEnvironment: 'node',
  testRegex: ['.spec.ts$', '.e2e-spec.ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  verbose: true,
}
