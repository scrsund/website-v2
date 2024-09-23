module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 12,
    sourceType: 'module',
    babelOptions: {
      presets: ['@babel/preset-env'],
    },
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-undef': 'off', // Turn off no-undef rule for global variables like defineProps and defineEmits
    'vue/script-setup-uses-vars': 'error', // Ensure variables used in <script setup> are recognized
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};
