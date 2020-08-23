module.exports = {
  ignorePatterns: [
    'dist/',
  ],
  extends: [
    'airbnb-base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'max-len': 'off',
    'no-trailing-spaces': ['warn', { skipBlankLines: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        vue: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.vue'],
      },
    },
  },
  overrides: [
    {
      files: ['*.vue'],
    },
  ],
};
