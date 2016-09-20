module.exports = {
    parser: 'babel-eslint',
    extends: [
        "plugin:flowtype/recommended",
        'airbnb',
    ],
    env: {
        browser: true,
    },
    plugins: [
        'flowtype',
    ],
    settings: {
        'import/resolver': {
            webpack: {
                config: 'webpack.config.js'
            }
        }
    },
    rules: {
        // SwitchCase 1 indents the case clauses in a switch statement http://eslint.org/docs/rules/indent
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        // JSX indentation should match our standard indentation
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],

        // Warn for very long lines - unless the line is a URL
        'max-len': ['warn', 120, { 'ignoreUrls': true }],

        "react/require-extension": 0,

        "import/no-extraneous-dependencies": [
            "error",
            { "devDependencies": ['*.test.js', '*.spec.js'] }
        ],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }]
    }
};
