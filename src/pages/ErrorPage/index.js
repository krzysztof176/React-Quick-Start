import React from 'react';

// Additional Packages
import PropTypes from 'prop-types';

// Material UI
import {Typography, withStyles} from '@material-ui/core';

// Images
import ReactLogo from '../../../public/images/png/React Logo 64.png';

// Styles
import styles from './index.styles';

const ErrorScreenPage = (props) => {
    const {classes, message} = props;

    return (
        <div className={classes.root}>
            <img src={ReactLogo} alt="" className={classes.logo} />
            <Typography variant="h6" className={classes.errorMessage}>
                {message}
            </Typography>
            <Typography variant="h6" className={classes.errorMessage}>
                {'Please Contact '}
                <a href="mailto:krzysztof176@gmail.com">krzysztof176@gmail.com</a>
            </Typography>
        </div>
    );
};

ErrorScreenPage.propTypes = {
    classes: PropTypes.object.isRequired,

    // passed props
    message: PropTypes.string.isRequired,
};

export default withStyles(styles)(ErrorScreenPage);
