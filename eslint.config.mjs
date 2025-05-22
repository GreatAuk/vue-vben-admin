// @ts-check

import { defineConfig } from '@vben/eslint-config';

export default defineConfig([
  {
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
      'unicorn/no-abusive-eslint-disable': 'off',
    },
  },
]);
