import { getJson, urlBuilder } from './util';

const URL_METRIC_DATA = '/dashboard.json';

export async function getDashboardMetric() {
    return await getJson(await urlBuilder(URL_METRIC_DATA));
}
