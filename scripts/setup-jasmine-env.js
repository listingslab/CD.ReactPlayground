/**
 * Add custom settings to Jasmine.
 * https://github.com/palcu/jest-example/blob/master/setup-jasmine-env.js
 */

/* globals jasmine */

jasmine.VERBOSE = true;

// eslint-disable-next-line import/no-extraneous-dependencies
const reporters = require('jasmine-reporters');

const junitReporter = new reporters.JUnitXmlReporter({
    savePath: 'reports',
    consolidateAll: false,
});
jasmine.getEnv().addReporter(junitReporter);
