// Additional Packages
import PropTypes from 'prop-types';
import {withSnackbar} from 'notistack';

const SnackBar = (props) => {
    const {enqueueSnackbar, closeSnackbar, setSnackBarProperties, snackBarProperties} = props;

    if (!snackBarProperties.enqueueSnackbar && !snackBarProperties.closeSnackbar) {
        setSnackBarProperties({enqueueSnackbar, closeSnackbar});
    }

    return null;
};

SnackBar.propTypes = {
    enqueueSnackbar: PropTypes.func.isRequired,
    closeSnackbar: PropTypes.func.isRequired,

    setSnackBarProperties: PropTypes.func.isRequired,
};

export default withSnackbar(SnackBar);
