import { getJson, urlBuilder } from './util';

const URL_DATA = '/EDAdmissionsDataSample.json';

export default function getEDAdmissionsData(){
    return await getJson(await urlBuilder(URL_DATA));
}
