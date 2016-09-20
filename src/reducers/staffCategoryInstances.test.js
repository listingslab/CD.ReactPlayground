/* @flow */
/* eslint-env jest */
/* eslint-disable prefer-arrow-callback, func-names */

import staffCategoryInstances from './staffCategoryInstances';
import * as actions from '../actions/staffCategoryInstances';
import INITIAL_STATE from '../initial_state';

import * as fixtures from './fixtures/staffCategoryInstances.fixtures';

describe('reducers', function () {
    describe('staffCategoryInstances', function () {
        it('should do nothing when passed REQUEST_STAFF_CATEGORY_INSTANCES', function () {
            const initialState = Object.assign({}, INITIAL_STATE.staffCategoryInstances);

            const action = actions.requestStaffCategoryInstances();

            const newState = staffCategoryInstances(initialState, action);

            expect(newState).toEqual(initialState);
        });

        it('should update only isFetching when passed STAFF_CATEGORY_INSTANCES_REQUESTED', function () {
            const initialState = Object.assign({}, INITIAL_STATE.staffCategoryInstances);

            const action = actions.staffCategoryInstancesRequested();

            const newState = staffCategoryInstances(initialState, action);

            expect(newState.isFetching).toEqual(true);
            expect(newState.indexByID).toEqual(initialState.indexByID);
            expect(newState.items).toEqual(initialState.items);
            expect(newState.error).toEqual(initialState.error);
        });

        it('should update isFetching and items when passed STAFF_CATEGORY_INSTANCES_RECEIVED', function () {
            const initialState = Object.assign({}, INITIAL_STATE.staffCategoryInstances);

            const instances = fixtures.instances();

            const action = actions.staffCategoryInstancesReceived(instances);

            const newState = staffCategoryInstances(initialState, action);

            expect(newState.isFetching).toEqual(false);
            expect(newState.items).toEqual(instances);
            expect(newState.error).toEqual(null);
        });

        it('should index all new items when passed STAFF_CATEGORY_INSTANCES_RECEIVED', function () {
            const initialState = Object.assign({}, INITIAL_STATE.staffCategoryInstances);

            const instances = fixtures.instances();

            const action = actions.staffCategoryInstancesReceived(instances);

            const newState = staffCategoryInstances(initialState, action);

            expect(newState.isFetching).toEqual(false);
            expect(newState.items).toEqual(instances);
            expect(newState.error).toEqual(null);

            expect(newState.indexByID).not.toBeNull();

            if (newState.indexByID) {
                for (let i = 0; i < instances.length; i++) {
                    const item = instances[i];

                    const index = newState.indexByID[item.id];

                    expect(newState.items[index]).toEqual(item);
                }
            }
        });

        it('should update isFetching and error when passed STAFF_CATEGORY_INSTANCES_ERROR', function () {
            const initialState = Object.assign({}, INITIAL_STATE.staffCategoryInstances);

            const error = 'This is An Error';

            const action = actions.staffCategoryInstancesError(error);

            const newState = staffCategoryInstances(initialState, action);

            expect(newState.isFetching).toEqual(false);
            expect(newState.indexByID).toEqual(initialState.indexByID); //
            expect(newState.items).toEqual(initialState.items);
            expect(newState.error).toEqual(error);
        });
    });
});
