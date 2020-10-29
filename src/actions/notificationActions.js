export const actionTypes = {
    PUSH_NOTIFICATION: 'PUSH_NOTIFICATION',
    REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
};

const pushNotification = (message, variant = 'info', autoHideDuration = 5000, anchorOrigin = {vertical: 'bottom', horizontal: 'right'}) => ({
    type: actionTypes.PUSH_NOTIFICATION,
    payload: {message, variant, anchorOrigin, autoHideDuration},
});

const removeNotification = () => ({
    type: actionTypes.REMOVE_NOTIFICATION,
});

export const actions = {
    pushNotification,
    removeNotification,
};
