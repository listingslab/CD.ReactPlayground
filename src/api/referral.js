import { getJson, urlBuilder } from './util';

const URL_DATA = '/referral_data2.json';
const URL_COLUMN_CONFIG = '/ReferralColumnConfig.json';
const URL_FORM_DEFINITION = '/WindanaForm1.json';
const URL_D3_DATA = '/AppointmentData.json';
const URL_CONTEXT_DATA = '/ExternalDataSample.json';

const URL_PREADMISSION_COLUMN_CONFIG = '/PreAdmissionColumnConfig.json';
const URL_WAITINGLIST_COLUMN_CONFIG = '/WaitingListColumnConfig.json';
const URL_REJECTEDLIST_COLUMN_CONFIG = '/RejectedListColumnConfig.json';

const URL_SCHEDULE_DATA = '/ScheduleData.json';

export async function getReferralData() {
    return await getJson(await urlBuilder(URL_DATA));
}

export async function getReferralColumnConfig() {
    return await getJson(await urlBuilder(URL_COLUMN_CONFIG));
}

export async function getAdmissionColumnConfig() {
    return await getJson(await urlBuilder(URL_PREADMISSION_COLUMN_CONFIG));
}

export async function getWaitingListColumnConfig() {
    return await getJson(await urlBuilder(URL_WAITINGLIST_COLUMN_CONFIG));
}

export async function getRejectedListColumnConfig() {
    return await getJson(await urlBuilder(URL_REJECTEDLIST_COLUMN_CONFIG));
}

export async function getFormDefinition(formID) {
    return await getJson(await urlBuilder(URL_FORM_DEFINITION));
}

export async function getD3Data() {
    return await getJson(await urlBuilder(URL_D3_DATA));
}

export async function getContextData() {
    return await getJson(await urlBuilder(URL_CONTEXT_DATA));
}

export async function getScheduleData() {
    return await getJson(await urlBuilder(URL_SCHEDULE_DATA));
}
