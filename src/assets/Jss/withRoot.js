import React from 'react';

// Additional Packages
import {SnackbarProvider} from 'notistack';

// Material UI
import {createMuiTheme, Button, CssBaseline} from '@material-ui/core';
import {StylesProvider, ThemeProvider} from '@material-ui/styles';

const theme = createMuiTheme({});

export const snackbarOnClickDismiss = (ref, key) => () => {
    ref.current.closeSnackbar(key);
};

export const getSnackbarAction = (ref) => (key) => (
    <Button onClick={snackbarOnClickDismiss(ref, key)} style={{color: '#FFFFFF'}}>
        Dismiss
    </Button>
);

export const withRoot = (Component) => (props) => {
    const snackbarRef = React.createRef();
    return (
        <>
            <CssBaseline />
            <StylesProvider>
                <ThemeProvider theme={theme}>
                    <SnackbarProvider
                        ref={snackbarRef}
                        maxSnack={10}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        action={getSnackbarAction(snackbarRef)}
                    >
                        <Component {...props} />
                    </SnackbarProvider>
                </ThemeProvider>
            </StylesProvider>
        </>
    );
};
