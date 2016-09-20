/* @flow */
import type { Action } from './action.flow';
import type { StaffCategoryInstance } from '../domain.flow';

export const REQUEST_STAFF_CATEGORY_INSTANCES = 'REQUEST_STAFF_CATEGORY_INSTANCES';
export const STAFF_CATEGORY_INSTANCES_REQUESTED = 'STAFF_CATEGORY_INSTANCES_REQUESTED';
export const STAFF_CATEGORY_INSTANCES_RECEIVED = 'STAFF_CATEGORY_INSTANCES_RECEIVED';
export const STAFF_CATEGORY_INSTANCES_ERROR = 'STAFF_CATEGORY_INSTANCES_ERROR';

export type RequestStaffCategoryInstancesAction = Action<'REQUEST_STAFF_CATEGORY_INSTANCES', null>;
export function requestStaffCategoryInstances(): RequestStaffCategoryInstancesAction {
    return { type: REQUEST_STAFF_CATEGORY_INSTANCES, payload: null };
}

export type StaffCategoryInstancesRequestedAction = Action<'STAFF_CATEGORY_INSTANCES_REQUESTED', null>;
export function staffCategoryInstancesRequested(): StaffCategoryInstancesRequestedAction {
    return { type: STAFF_CATEGORY_INSTANCES_REQUESTED, payload: null };
}

type StaffCatInstances = Array<StaffCategoryInstance>;
export type StaffCategoryInstancesReceivedAction = Action<'STAFF_CATEGORY_INSTANCES_RECEIVED', StaffCatInstances>;
export function staffCategoryInstancesReceived(instances: StaffCatInstances): StaffCategoryInstancesReceivedAction {
    return { type: STAFF_CATEGORY_INSTANCES_RECEIVED, payload: instances };
}

export type StaffCategoryInstancesError = Action<'STAFF_CATEGORY_INSTANCES_ERROR', string>;
export function staffCategoryInstancesError(error: string): StaffCategoryInstancesError {
    return { type: STAFF_CATEGORY_INSTANCES_ERROR, payload: error };
}
