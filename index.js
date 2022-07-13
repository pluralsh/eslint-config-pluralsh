module.exports = {
  root: true,

  settings: {
    // Allow importing more file types
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.json',
        ],
      },
    },
  },

  extends: ['airbnb', 'airbnb/hooks'],

  env: {
    browser: true,
    node: true,
    es2020: true
  },

  rules: {
    /**
     * Core eslint rules
     * Ref: https://eslint.org/docs/latest/rules/
     * TODO: Enable 'off' rules
     * */
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': ['error', 'stroustrup'],
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'default-case': 'off',
    'function-paren-newline': ['error', { minItems: 4 }],
    // Deprecated. Make sure it is needed.
    'global-require': 'off',
    'implicit-arrow-linebreak': ['error', 'beside'],
    indent: ['error', 2, { ignoreComments: true }],
    'max-len': 'off',
    'no-alert': 'off',
    'no-await-in-loop': 'off',
    'no-bitwise': 'off',
    'no-confusing-arrow': 'error',
    'no-console': 'off',
    // Deprecated. Make sure it is needed.
    'no-constant-condition': 'off',
    'no-continue': 'off',
    'no-loop-func': 'off',
    'no-mixed-operators': 'off',
    'no-multi-assign': 'off',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
    'no-self-compare': 'off',
    'no-shadow': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': ['error', 'never', { allowSingleLineBlocks: true }],
    'padding-line-between-statements': [
      'error',
      // Require a blank line before return statement
      { blankLine: 'always', prev: '*', next: 'return' },
      // Require a blank line after a sequence of imports
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      // Require a blank line after a sequence of variable declarations
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
    ],
    radix: 'off',
    'semi-style': 'error',
    'space-infix-ops': 'error',
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
        allowSeparatedGroups: true,
      },
    ],

    /**
     * Import specific eslint rules
     * Ref: https://github.com/import-js/eslint-plugin-import
     * TODO: Enable 'off' rules
     * */
    'import/no-cycle': 'off',
    'import/no-dynamic-require': 'off',
    'import/order': ['error', { 'newlines-between': 'always-and-inside-groups' }],
    'import/prefer-default-export': 'off',

    /**
     * Static AST checker for accessibility rules.
     * Ref: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
     * TODO: Enable 'off' rules
     * */
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    /**
     * React specific eslint rules
     * Ref: https://github.com/jsx-eslint/eslint-plugin-react
     * TODO: Enable 'off' rules
     * */
    'react/jsx-filename-extension': 'off',
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'always'
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-no-bind': 'off',
    'react/no-array-index-key': 'off',
    'react/no-danger': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/sort-comp': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unstable-nested-components': 'off',
  },
};
