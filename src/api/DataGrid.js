import { getJson, urlBuilder } from './util';

const URL_DATA = '/EDAdmissionsDataSample.json';

export async function getEDAdmissionsData() {
   return await getJson(await urlBuilder(URL_DATA));
}

