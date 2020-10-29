import React from 'react';

// Additional Packages
import PropTypes from 'prop-types';

// Material UI
import {CircularProgress, withStyles} from '@material-ui/core';

// Styles
import styles from './index.styles';

const LoadingScreenPage = (props) => {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <img src="images/png/React Logo 64.png" className={classes.logo} alt="React logo" />
            <CircularProgress variant="indeterminate" className={classes.spinner} />
        </div>
    );
};

LoadingScreenPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingScreenPage);
