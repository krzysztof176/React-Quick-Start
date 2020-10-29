export const actionTypes = {
    UPDATE_SELECTED_SCREEN: 'UPDATE_SELECTED_SCREEN',
};

const updateSelectedScreen = (value) => ({
    type: actionTypes.UPDATE_SELECTED_SCREEN,
    value,
});

export const actions = {
    updateSelectedScreen,
};
