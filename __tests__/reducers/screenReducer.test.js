// Action Types
import {actionTypes} from '../../src/actions/index';

// Test Component
import {screenReducer, SCREEN_REDUCER_INITIAL_STATE} from '../../src/reducers/screenReducer';

let INITIAL_STATE = {};

describe('Screen Reducers Tests', () => {
    beforeEach(() => {
        INITIAL_STATE = SCREEN_REDUCER_INITIAL_STATE;
    });

    describe(`${actionTypes.UPDATE_SELECTED_SCREEN}`, () => {
        test('Successful case', () => {
            expect(
                screenReducer(INITIAL_STATE, {type: actionTypes.UPDATE_SELECTED_SCREEN, value: 'ERROR'}).selectedScreen,
            ).toEqual('ERROR');
        });
    });

    describe('Default', () => {
        test('Successful case', () => {
            expect(
                screenReducer(undefined, {type: ''}),
            ).toEqual(INITIAL_STATE);
        });
    });
});
