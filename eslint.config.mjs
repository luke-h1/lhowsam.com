import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import astroParser from 'astro-eslint-parser';
import astroPlugin from 'eslint-plugin-astro';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compat = new FlatCompat({
  baseDirectory: dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores([
    '**/node_modules',
    '**/.github',
    '**/.next',
    '**/.vercel',
    '**/public',
    '**/build',
    '**/.next/',
    '**/build/',
    '**/coverage/',
    '**/node_modules/',
    '**/*.min.css',
    '**/*.min.js',
    '**/@sanity',
  ]),
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    extends: fixupConfigRules(
      compat.extends(
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/strict',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
        'prettier/prettier',
      ),
    ),
    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: ['tsconfig.json'],
        },
      },
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false,
        },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          mjs: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/no-unresolved': [
        'error',
        {
          ignore: ['^(part|all):', '^astro:'],
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external', 'internal'],
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: '@frontend/**',
              group: 'internal',
            },
          ],
          alphabetize: {
            order: 'asc',
          },
        },
      ],
      'react/function-component-definition': 'off',
      'import/prefer-default-export': 'off',
      'no-unsafe-finally': 'off',
      'no-underscore-dangle': [
        'error',
        {
          allow: ['key', '_type', '_rev', '_id'],
        },
      ],
      'no-use-before-define': 'off',
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],
      'react/jsx-one-expression-per-line': 'off',
      '@typescript-eslint/ban-types': 'off',
      'no-case-declarations': 'error',
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@next/next/no-img-element': 'off',
      'react/jsx-props-no-spreading': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'react/jsx-wrap-multilines': [
        'error',
        {
          prop: 'ignore',
        },
      ],
      'react/prop-types': 'off',
      'import/no-extraneous-dependencies': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/state-in-constructor': 'off',
      'react/no-unescaped-entities': [
        'error',
        {
          forbid: [
            {
              char: '>',
              alternatives: ['&gt;'],
            },
            {
              char: '}',
              alternatives: ['&#125;'],
            },
          ],
        },
      ],
    },
  },
  {
    ...nextPlugin.configs.recommended,
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    rules: {
      ...nextPlugin.configs.recommended.rules,
      '@next/next/no-img-element': 'off',
    },
  },
  ...astroPlugin.configs['flat/recommended'],
  {
    files: ['**/*.astro'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
        project: ['tsconfig.json'],
      },
    },
    rules: {
      'astro/no-set-html-directive': 'error',
    },
  },
  {
    files: ['**/*.js'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'global-require': 'off',
      'import/no-dynamic-require': 'off',
      'no-console': 'off',
    },
  },
  {
    files: ['eslint.config.mjs'],
    rules: {
      'import/order': 'off',
    },
  },
  {
    files: ['**/sst.config.ts', '**/open-next.config.ts'],
    rules: {
      all: 'off',
    },
  },
]);
