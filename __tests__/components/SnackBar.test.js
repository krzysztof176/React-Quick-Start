// Additional Packages
import {SnackbarProvider} from 'notistack';

// Test Utils
import {generateTestWrapperUtils, testRenderContainsChildComponent} from '../TestUtils';

// Test Component
import SnackBar from '../../src/components/SnackBar';

const {constructMountedWrapper} = generateTestWrapperUtils();

describe('SnackBar Component', () => {
    describe('DOM Render', () => {
        test('Renders when snackBarProperties is not set yet', () => {
            const {wrapper} = constructMountedWrapper(
                SnackBar,
                {
                    props: {
                        setSnackBarProperties: jest.fn(),
                        snackBarProperties: {},
                    },
                },
                SnackbarProvider,
            );
            testRenderContainsChildComponent(wrapper, SnackbarProvider);
        });

        test('Renders when snackBarProperties is already set', () => {
            const {wrapper} = constructMountedWrapper(
                SnackBar,
                {
                    props: {
                        setSnackBarProperties: jest.fn(),
                        snackBarProperties: {enqueueSnackbar: jest.fn(), closeSnackbar: jest.fn()},
                    },
                },
                SnackbarProvider,
            );
            testRenderContainsChildComponent(wrapper, SnackbarProvider);
        });
    });
});
