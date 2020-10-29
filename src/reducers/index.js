// Reducers
import {combineReducers} from 'redux';
import {screenReducer} from './screenReducer';
import {notificationReducer} from './notificationReducer';

export default combineReducers({
    screenReducer,
    notificationReducer,
});
