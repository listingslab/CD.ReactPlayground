import { getJson, urlBuilder } from './util';

const URL_DATA = '/occupancy.json';
const URL_WARD_CONFIG = '/wardColumnConfig.json';
const URL_FORM_DEFINITION = '/TestForm.json';

export async function getWardData(wardID) {
    return await getJson(await urlBuilder(URL_DATA));
}

export async function getWardColumnConfig(wardID) {
    return await getJson(await urlBuilder(URL_WARD_CONFIG));
}

export async function getTestFormDefinition() {
    return await getJson(await urlBuilder(URL_FORM_DEFINITION));
}
