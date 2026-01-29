// @ts-check
import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  {
    ignores: [
      'eslint.config.mjs',
      '**/*.json',
      'dist/**',
      'node_modules/**',
    ],
  },

  // Base ESLint (igual lo apagamos después)
  eslint.configs.recommended,

  // TypeScript (NO type-checked)
  ...tseslint.configs.recommended,

  // Prettier
  eslintPluginPrettierRecommended,

  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
    },
  },

  // 🔥 APAGADO TOTAL 🔥
  {
    rules: {
      /* ========= ESLINT CORE ========= */
      'no-unused-vars': 'off',
      'no-useless-catch': 'off',
      'no-async-promise-executor': 'off',

      /* ========= TYPESCRIPT ESLINT ========= */
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/prefer-promise-reject-errors': 'off',

      /* ========= PRETTIER ========= */
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
);
