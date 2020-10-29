import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {SCREEN_REDUCER_INITIAL_STATE} from '../src/reducers/screenReducer';
import {NOTIFICATION_REDUCER_INITIAL_STATE} from '../src/reducers/notificationReducer';

export default configureStore([thunk])({
    screenReducer: {...SCREEN_REDUCER_INITIAL_STATE},
    notificationReducer: {...NOTIFICATION_REDUCER_INITIAL_STATE},
});
