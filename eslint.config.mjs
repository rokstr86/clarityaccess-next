import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  // Ignore build artifacts and config files
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      'coverage/**',
      // common configs that shouldn't be linted
      '**/*.config.*',
      'postcss.config.cjs',
      'tailwind.config.*',
      'next.config.*',
      'prettier.config.*',
      'eslint.config.*'
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  // Default for source files
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node }
    },
    rules: {}
  },
  // Override for *.cjs files so ESLint knows it's CommonJS
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly'
      }
    }
  }
]
