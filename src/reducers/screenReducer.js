// Action Types
import {actionTypes} from '../actions';

export const SCREEN_REDUCER_INITIAL_STATE = {
    selectedScreen: 'welcomePage',
};

export const screenReducer = (state, action) => {
    if (action.type === actionTypes.UPDATE_SELECTED_SCREEN) {
        return {...state, selectedScreen: action.value};
    }
    return state || SCREEN_REDUCER_INITIAL_STATE;
};
