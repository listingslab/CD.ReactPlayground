/* @flow */

import type { StaffCategoryInstancesState } from '../domain.flow';

import INITIAL_STATE from '../initial_state';
import * as actions from '../actions/staffCategoryInstances';


export default function (
    state: StaffCategoryInstancesState = INITIAL_STATE.staffCategoryInstances,
    action: actions.RequestStaffCategoryInstancesAction |
        actions.StaffCategoryInstancesRequestedAction |
        actions.StaffCategoryInstancesReceivedAction |
        actions.StaffCategoryInstancesError
): StaffCategoryInstancesState {
    switch (action.type) {
        case actions.STAFF_CATEGORY_INSTANCES_REQUESTED:
            return Object.assign({}, state, { isFetching: true });
        case actions.STAFF_CATEGORY_INSTANCES_RECEIVED: {
            const indexByID = {};

            for (let i = 0; i < action.payload.length; i++) {
                indexByID[action.payload[i].id] = i;
            }

            return Object.assign({}, state, { isFetching: false, items: action.payload, error: null, indexByID });
        }
        case actions.STAFF_CATEGORY_INSTANCES_ERROR:
            return Object.assign({}, state, { isFetching: false, error: action.payload });
        default:
            return state;
    }
}
