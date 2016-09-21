import 'isomorphic-fetch';
import { HttpError } from '../utilities/HttpError';
import { Config } from '../utilities/ConfigLoader';


const urlSearchRe = /(\{[a-z][a-z0-9.\-]*})/i;

/**
 * Takes a string and replaces in all of the parameters. If a parameter is not found in the
 * passed in object, it is instead looked up in via @see:ConfigLoader
 * @param {string} url URL to build, substitutions are keys wrapped in '{}'
 * @param {Object.<string,string>} [parameters]
 * @returns {string}
 */
export async function urlBuilder(url, parameters = {}) {
    const parts = url.split(urlSearchRe);
    const length = parts.length;

    for (let i = 0; i < length; i++) {
        const part = parts[i];
        if (part.startsWith('{') && part.endsWith('}')) {
            const key = part.substr(1, part.length - 2);

            if (parameters.hasOwnProperty(key)) {
                parts[i] = parameters[key];
            } else {
                const config = await Config.get(key);
                if (config !== undefined) {
                    parts[i] = config;
                }
            }
        }
    }

    return parts.join('');
}

/**
 * @param {string} url
 * @returns {Promise.<Object,HttpError>}
 */
export function getJson(url) {
    return window.fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new HttpError(response.statusText, response.status);
        });
}

/**
 * @param {string} url
 * @returns {Promise.<string,HttpError>}
 */
export function getText(url) {
    return window.fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.text();
            }
            throw new HttpError(response.statusText, response.status);
        });
}
