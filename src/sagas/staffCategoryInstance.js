
import { takeEvery } from 'redux-saga';
import { REQUEST_STAFF_CATEGORY_INSTANCES } from '../actions/staffCategoryInstances';

export function* getStaffCategoryInstances() {
    // pass
}

export default function* () {
    yield* takeEvery(REQUEST_STAFF_CATEGORY_INSTANCES, getStaffCategoryInstances);
}
