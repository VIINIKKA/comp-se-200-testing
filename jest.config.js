module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  collectCoverageFrom: [
    '*.js',
    '!jest.config.js',
    '!*.test.js',
    '!*.ai.test.js',
    '!babel.config.js',
  ],
};
