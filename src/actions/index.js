// ActionTypes and Actions
import * as screenActions from './screenActions';
import * as notificationActions from './notificationActions';

const actionTypes = {
    ...screenActions.actionTypes,
    ...notificationActions.actionTypes,
};

const actions = {
    ...screenActions.actions,
    ...notificationActions.actions,
};

export {
    actionTypes,
    actions,
};
