import { actionTypes } from '../actions/index';

export const EMPTY_DATA_STATE = {
    isLoading: false,
    isErrored: false,
    data: undefined,
    error: undefined
};

export const DATA_REDUCER_INITIAL_STATE = {
    users: {...EMPTY_DATA_STATE}
};

export const dataReducer = (state,action) => {
    let dataState;

    if(!state)
        state = DATA_REDUCER_INITIAL_STATE;

    switch(action.type){
        case actionTypes.DATA_LOADING:
            dataState = state[action.payload.name] || EMPTY_DATA_STATE;
            dataState = { ...dataState };
            dataState.isLoading = true;
            dataState.isErrored = false;
            return {
                ...state,
                [action.payload.name]: dataState
            };

        case actionTypes.RECEIVED_DATA:
            dataState = state[action.payload.name] || EMPTY_DATA_STATE;
            dataState = { ...dataState };
            dataState.isLoading = false;
            dataState.isErrored = false;
            return {
                ...state,
                [action.payload.name]: dataState
            };
        
        default:
            return state;
    }
};