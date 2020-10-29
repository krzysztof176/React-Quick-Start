import React from 'react';

// Additional Packages
import PropTypes from 'prop-types';
import _ from 'lodash';

// Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import {Grid, withStyles} from '@material-ui/core';
import {actions} from '../../actions';

// Pages
import LoadingPage from '../LoadingPage';

// Components
import GlobalNavbar from '../../components/GlobalNavbar';
import SnackBar from '../../components/SnackBar';

// Constants
import ScreenProperties from '../../constants/ScreenProperties';

// Styles
import styles from './index.styles';

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isApplicationReady: false,
            isDataReady: false,
            availableScreens: [],
            snackBarProperties: {
                enqueueSnackbar: undefined,
                closeSnackbar: undefined,
            },
        };
    }

    componentDidMount() {
        this.mounted = true;
        const {error, updateSelectedScreen} = this.props;

        if (error) {
            updateSelectedScreen('errorPage');
        } else {
            this.loadData();
        }
    }

    // eslint-disable-next-line no-unused-vars
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.checkForDataReady();
        this.checkForApplicationReady();
        this.postNotification();
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    // Notification Functions
    setSnackBarProperties = (snackBarProperties) => {
        this.setState({snackBarProperties});
    };

    postNotification = () => {
        const {notifications, removeNotification} = this.props;
        const {snackBarProperties} = this.state;

        if (!_.isEmpty(notifications)) {
            const notification = _.cloneDeep(notifications[0]);
            const {message} = notification;
            delete notification.message;
            snackBarProperties.enqueueSnackbar(message, notification);
            removeNotification();
        }
    };

    // Page Functions
    loadData = () => {
        this.checkForDataReady();
    };

    onScreenSelection = (screenName) => {
        const {updateSelectedScreen} = this.props;
        updateSelectedScreen(screenName);
    };

    checkForDataReady = () => {
        const {isDataReady} = this.state;
        if (!isDataReady) {
            this.setState({isDataReady: true});
            this.generateAvailableScreens();
        }
    }

    checkForApplicationReady = () => {
        const {pushNotification} = this.props;
        const {isDataReady, isApplicationReady, snackBarProperties} = this.state;

        if (isDataReady && !isApplicationReady && snackBarProperties.enqueueSnackbar && snackBarProperties.closeSnackbar) {
            this.setState({isApplicationReady: true});
            pushNotification('Welcome to React Quick Start', 'success', null);
            pushNotification('Welcome to React Quick Start', 'error');
            pushNotification('Welcome to React Quick Start', 'warning');
            pushNotification('Welcome to React Quick Start');
        }
    };

    generateAvailableScreens = () => {
        const availableScreens = _.cloneDeep(ScreenProperties);
        this.filterScreensBaseOnMenuItem(availableScreens);
        this.setState({availableScreens});
    };

    filterScreensBaseOnMenuItem = (screenProperties) => {
        if (!_.isEmpty(screenProperties)) {
            _.remove(screenProperties, (screenProperty) => !screenProperty.isMenuItem);
            this.filterScreensBaseOnMenuItem(_.flatMap(screenProperties, screenProperty => screenProperty.children));
        }
    };

    lookUpSelectedScreenProperties = (screenProperties) => {
        const {selectedScreen} = this.props;
        const index = _.findIndex(screenProperties, {componentName: selectedScreen});

        if (_.isEmpty(screenProperties)) {
            return ScreenProperties[0];
        }

        if (index === -1) {
            return this.lookUpSelectedScreenProperties(_.flatMap(screenProperties, screenProperty => screenProperty.children));
        }
        return screenProperties[index];
    };

    render() {
        const {classes, error} = this.props;
        const {availableScreens, snackBarProperties, isDataReady, isApplicationReady} = this.state;

        if (!isDataReady) {
            return <LoadingPage />;
        }

        const selectedScreenProperties = this.lookUpSelectedScreenProperties(availableScreens);
        return (
            <>
                {
                    isApplicationReady ? (
                        <GlobalNavbar
                            appName="React Quick Start"
                            onScreenSelection={this.onScreenSelection}
                            selectedScreenProperties={selectedScreenProperties}
                            error={error}
                            availableScreens={availableScreens}
                        />
                    ) : null
                }

                {isApplicationReady ? (
                    <Grid container className={classes.pageContainer}>
                        {selectedScreenProperties.component}
                    </Grid>
                ) : null}

                <SnackBar
                    snackBarProperties={snackBarProperties}
                    setSnackBarProperties={this.setSnackBarProperties}
                />
            </>
        );
    }
}

MainPage.defaultProps = {
    error: undefined,
};

MainPage.propTypes = {
    classes: PropTypes.object.isRequired,

    // Passed Props
    error: PropTypes.string,

    // Redux Store
    selectedScreen: PropTypes.string.isRequired,
    notifications: PropTypes.array.isRequired,

    // Actions
    updateSelectedScreen: PropTypes.func.isRequired,
    removeNotification: PropTypes.func.isRequired,
    pushNotification: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    selectedScreen: state.screenReducer.selectedScreen,
    notifications: state.notificationReducer.notifications,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateSelectedScreen: actions.updateSelectedScreen,
    removeNotification: actions.removeNotification,
    pushNotification: actions.pushNotification,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainPage));
