// Additional Packages
import configureStore from 'redux-mock-store';

// Test Component
import {actionTypes, actions} from '../../src/actions';

const mockStore = configureStore();
const store = mockStore();

describe('Screen Actions Tests', () => {
    beforeEach(() => {
        store.clearActions();
    });

    describe(`${actionTypes.UPDATE_SELECTED_SCREEN}`, () => {
        test('Successful case', () => {
            const expectedActions = [{
                value: 'ERROR',
                type: actionTypes.UPDATE_SELECTED_SCREEN,
            }];

            store.dispatch(actions.updateSelectedScreen('ERROR'));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
