import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!.*.mjs$)'],
  globalSetup: '<rootDir>/11.fetch_API/API/test_config/jest.global-setup.ts',
  globalTeardown: '<rootDir>/11.fetch_API/API/test_config/jest.global-teardown.ts',
  verbose: true,
  detectOpenHandles: true
}

export default config