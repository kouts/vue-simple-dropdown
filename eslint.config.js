import { config } from '@kouts/eslint-config'

export default [
  ...config({
    env: ['browser'],
  }),
  {
    // Configuration for test files
    name: 'project-test-files',
    files: ['**/*.spec.{js,ts}', '**/*.test.{js,ts}'],
    languageOptions: {
      globals: {
        jest: 'readonly',
      },
    },
  },
]
