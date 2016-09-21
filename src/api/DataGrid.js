import { getJson, urlBuilder } from './util';

const URL_DATA = '/EDAdmissionsDataSample.json';

// eslint-disable-next-line import/prefer-default-export
export async function getEDAdmissionsData() {
    return await getJson(await urlBuilder(URL_DATA));
}
