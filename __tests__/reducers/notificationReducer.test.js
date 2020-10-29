// Action Types
import {actionTypes} from '../../src/actions/index';

// Test Component
import {notificationReducer, NOTIFICATION_REDUCER_INITIAL_STATE} from '../../src/reducers/notificationReducer';

let INITIAL_STATE = {};

describe('Notification Reducers Tests', () => {
    beforeEach(() => {
        INITIAL_STATE = NOTIFICATION_REDUCER_INITIAL_STATE;
    });

    describe(`${actionTypes.PUSH_NOTIFICATION}`, () => {
        let variant = 'success';
        let message = 'test';
        let autoHideDuration = 5000;
        let anchorOrigin = {vertical: 'bottom', horizontal: 'right'};

        beforeEach(() => {
            variant = 'success';
            message = 'test';
            autoHideDuration = 5000;
            anchorOrigin = {vertical: 'bottom', horizontal: 'right'};
        });

        test('Successful case', () => {
            expect(
                notificationReducer(INITIAL_STATE, {type: actionTypes.PUSH_NOTIFICATION, payload: {message, variant, anchorOrigin, autoHideDuration}}).notifications,
            ).toEqual([{key: 'success-test-5000', message, variant, anchorOrigin, autoHideDuration}]);
        });
    });

    describe(`${actionTypes.REMOVE_NOTIFICATION}`, () => {
        test('Successful case', () => {
            expect(
                notificationReducer({notifications: ['test']}, {type: actionTypes.REMOVE_NOTIFICATION}).notifications,
            ).toEqual([]);
        });
    });

    describe('Default', () => {
        test('Successful case', () => {
            expect(
                notificationReducer(undefined, {type: ''}),
            ).toEqual(INITIAL_STATE);
        });
    });
});
