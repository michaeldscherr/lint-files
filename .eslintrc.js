module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    extends: ['airbnb'],
    plugins: [
        'html', 'vue', 'import'
    ],
    settings: {
        'import/resolver': 'webpack'
    },
    env: {
        browser: true,
        node: true
    },
    rules: {
        'no-continue': [1],
        'comma-dangle': [
            2, 'always-multiline'
        ],
        'no-trailing-spaces': [
            1, {
                'skipBlankLines': true
            }
        ],
        'global-require': [0],
        'no-underscore-dangle': 0,
        indent: [
            1,
            4, {
                'SwitchCase': 1
            }
        ],
        'arrow-parens': 0,
        'arrow-body-style': [
            1, 'as-needed'
        ],
        'generator-star-spacing': 0,
        'no-debugger': process.env.NODE_ENV === 'production'
            ? 2
            : 0,
        'space-before-function-paren': 0,
        'no-param-reassign': [
            0, {
                props: false
            }
        ],
        'valid-typeof': 0,
        'import/no-dynamic-require': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-unresolved': 1,
        'import/extensions': 0,
        'import/prefer-default-export': 0,
        'class-methods-use-this': 0,
        'react/jsx-indent-props': [
            1, 4
        ],
        'react/jsx-indent': [
            1, 4
        ],
        'react/jsx-filename-extension': [
            1, {
                'extensions': ['.js', '.jsx']
            }
        ],
        'react/forbid-prop-types': [
            1, {
                'forbid': ['any']
            }
        ],
        'react/prefer-stateless-function': [1],
        'react/jsx-sort-props': [
            1, {
                'ignoreCase': true,
                callbacksLast: true,
                shorthandFirst: true
            }
        ]
    }
};
