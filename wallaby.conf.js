process.env.NODE_ENV = 'test';

// eslint-disable-next-line func-names
module.exports = function (wallaby) {
    return {
        files: [
            { pattern: 'node_modules/react/dist/react-with-addons.js', instrument: false },
            'src/**',
            '!src/**/*.test.js',
            '!src/**/*.fixture.js',
        ],

        tests: [
            'src/**/*.test.js',
        ],

        compilers: {
            '**/*.js': wallaby.compilers.babel(),
            '**/*.jsx': wallaby.compilers.babel(),
        },

        env: {
            type: 'node',
            runner: 'node',
        },

        testFramework: 'jest',
    };
};
