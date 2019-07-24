export const actionTypes = {
    DATA_LOADING: 'DATA_LOADING',
    DATA_ERROR: 'DATA_ERROR',
    RECEIVED_DATA: 'RECEIVED_DATA'
};

const dataLoading = (name) => ({
    type: actionTypes.DATA_LOADING,
    payload: { name }
});

const dataError = (name, error) => ({
    type: actionTypes.DATA_ERROR,
    payload: { name, error }
});

const receiveData = (name, data) => ({
    type: actionTypes.RECEIVED_DATA,
    payload: { name, data }
});

const updateSelectedScreen = (screen) => dispatch => {
    dispatch(receiveData("selectedScreen", screen));
};

export const actions = {
    updateSelectedScreen
};
