module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  testMatch: [
    '**/**/*.spec.ts',
  ],
  setupFiles: [
    "<rootDir>/tests/jest-test-util.ts",
  ],
  moduleNameMapper: {
    '^@tests/(.*)$': '<rootDir>/tests/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
