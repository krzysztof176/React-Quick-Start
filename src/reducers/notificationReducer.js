// Action Types
import {actionTypes} from '../actions/index';

export const NOTIFICATION_REDUCER_INITIAL_STATE = {
    notifications: [],
};

export const notificationReducer = (state, action) => {
    if (action.type === actionTypes.PUSH_NOTIFICATION) {
        return {
            ...state,
            notifications: state.notifications.concat([{
                key: `${action.payload.variant}-${action.payload.message}-${action.payload.autoHideDuration}`,
                variant: action.payload.variant,
                message: action.payload.message,
                autoHideDuration: action.payload.autoHideDuration,
                anchorOrigin: action.payload.anchorOrigin}])};
    }

    if (action.type === actionTypes.REMOVE_NOTIFICATION) {
        return {...state, notifications: state.notifications.slice(1)};
    }
    return state || NOTIFICATION_REDUCER_INITIAL_STATE;
};
