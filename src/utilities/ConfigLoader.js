/* global APP_BASE_URL */

import { HttpError } from './HttpError';

// https://k94n.com/es6-modules-single-instance-pattern

/**
 * A Singleton to Lazy load "./config.json" and perform string interpolation in the style of
 * JavaScript string templates.
 *
 * @class ConfigLoader
 */
class ConfigLoader {
    /**
     * @type {Promise.<Object,HttpError>|null}
     * @private
     */
    configPromise = null;

    /**
     * @returns {Promise.<Object,HttpError>|null}
     * @constructor
     */
    get ConfigPromise() {
        if (!this.configPromise) {
            this.configPromise = ConfigLoader.loadConfig();
        }
        return this.configPromise;
    }

    /**
     * Perform the load of the config
     * @returns {Object}
     * @private
     */
    static async loadConfig() {
        let baseUrl = APP_BASE_URL;
        if (baseUrl.endsWith('/')) {
            baseUrl = baseUrl.substr(0, baseUrl.length - 1);
        }

        const response = await fetch(`${baseUrl}/config.json`);
        if (!response.ok) {
            throw new HttpError(response.statusText, response.status);
        }

        return ConfigLoader.interpolate(await response.json());
    }

    /**
     * Performs string interpolation on an Object using the Object as the local scope
     * @param {Object} data
     * @returns {Object}
     */
    static interpolate(data) {
        const keys = Object.getOwnPropertyNames(data);

        const params = [];
        for (let i = 0; i < keys.length; i++) {
            params[i] = data[keys[i]];
        }

        // Create a new function that returns the interpolated JSON
        // eslint-disable-next-line no-new-func
        return JSON.parse(new Function(keys, `return \`${JSON.stringify(data)}\`;`)(...params));
    }

    /**
     *
     * @param {string} key Dot delimited path to to desired config key
     * @returns {string|number|boolean|Object|Array}
     */
    async get(key) {
        // Adapted from https://github.com/lodash/lodash/blob/4.14.1/lodash.js#L2766
        let configObject = await this.ConfigPromise;

        const path = key.split('.');
        const length = path.length;

        const index = 0;
        while (configObject != null && index < length) {
            configObject = configObject[path[index + 1]];
        }

        return (index && index === length) ? configObject : undefined;
    }
}

export default Config = new ConfigLoader();
