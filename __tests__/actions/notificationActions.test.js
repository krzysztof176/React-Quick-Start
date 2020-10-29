// Additional Packages
import configureStore from 'redux-mock-store';

// Test Component
import {actionTypes, actions} from '../../src/actions';

const mockStore = configureStore();
const store = mockStore();

describe('Notification Actions Tests', () => {
    beforeEach(() => {
        store.clearActions();
    });

    describe(`${actionTypes.PUSH_NOTIFICATION}`, () => {
        let variant = 'info';
        let message = 'test';
        let autoHideDuration = 5000;
        let anchorOrigin = {vertical: 'bottom', horizontal: 'right'};

        beforeEach(() => {
            variant = 'info';
            message = 'test';
            autoHideDuration = 5000;
            anchorOrigin = {vertical: 'bottom', horizontal: 'right'};
        });

        test('Successful case', () => {
            const expectedActions = [{
                type: actionTypes.PUSH_NOTIFICATION,
                payload: {message, variant, anchorOrigin, autoHideDuration},
            }];

            store.dispatch(actions.pushNotification(message, variant));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe(`${actionTypes.REMOVE_NOTIFICATION}`, () => {
        test('Successful case', () => {
            const expectedActions = [{
                type: actionTypes.REMOVE_NOTIFICATION,
            }];

            store.dispatch(actions.removeNotification());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
