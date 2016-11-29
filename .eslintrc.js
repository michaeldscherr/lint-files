module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  extends: ['airbnb'],
  // required to lint *.vue files
  plugins: [
    'html',
    // 'sorting',
  ],
  env: {
    browser: true,
    node: true,
  },
  // add your custom rules here
  rules: {
    'global-require': [0],
    'no-underscore-dangle': 0,
    // indent
    indent: [1, 4, { 'SwitchCase': 1 }],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'arrow-body-style': [1, 'as-needed'],
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': 0,
    'no-param-reassign': [0, { props: false }],
    'valid-typeof': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': [1, { ignore: ['rpca'] }],
    'import/extensions': 0,
    'class-methods-use-this': 0,
    // react
    'react/jsx-indent-props': [1, 4],
    'react/jsx-indent': [1, 4],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/forbid-prop-types': [1, { 'forbid': ['any'] }],
    'react/prefer-stateless-function': [1],
    'react/jsx-sort-props': [1, { 'ignoreCase': true, callbacksLast: true, shorthandFirst: true }],
    // sorting
    // 'sorting/sort-object-props': [1, { 'ignoreCase': true }],
  },
};
