/* @flow */
import type { StaffBoardState } from './domain.flow';

const INITIAL_STATE: StaffBoardState = {
    staffCategoryDefs: {
        isFetching: false,
        error: null,
        items: [],
        indexByID: null,
    },
    staffCategoryInstances: {
        isFetching: false,
        error: null,
        items: [],
        indexByID: null,
    },
};

export default INITIAL_STATE;
