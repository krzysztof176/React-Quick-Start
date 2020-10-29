import React from 'react';

// Additional Packages
import {hot} from 'react-hot-loader';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';

// Store
import store from '../store/configureStore';

// Pages
import MainPage from './MainPage';

// WithRoot
import {withRoot} from '../assets/Jss/withRoot';

const App = (props) => {
    const {error} = props;

    return (
        <Provider store={store}>
            <MainPage
                error={error}
            />
        </Provider>
    );
};

App.defaultProps = {
    error: undefined,
};

App.propTypes = {
    error: PropTypes.string,
};

export default hot(module)(withRoot(App));
