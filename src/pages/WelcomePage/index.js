import React from 'react';

// Additional Packages
import PropTypes from 'prop-types';

// Material UI
import {withStyles, Typography} from '@material-ui/core';

// Styles
import styles from './index.styles';

const WelcomePage = (props) => {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <Typography>
                Welcome to React Quick Start
            </Typography>
            <img src="images/png/React Logo 64.png" className={classes.logo} alt="React logo" />
        </div>
    );
};

WelcomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WelcomePage);
