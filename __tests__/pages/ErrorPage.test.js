// Material UI
import {Typography} from '@material-ui/core';

// Test Utils
import {generateTestWrapperUtils, testRenderContainsChildComponent} from '../TestUtils';

// Test Component
import ErrorScreenPage from '../../src/pages/ErrorPage';

const {constructMountedWrapper} = generateTestWrapperUtils();

describe('Error Screen Page Tests', () => {
    let wrapper;
    let unmountComponent;

    beforeEach(() => {
        ({wrapper, unmountComponent} = constructMountedWrapper(ErrorScreenPage, {props: {message: ''}}));
    });

    describe('DOM Render', () => {
        test('Renders Components', () => {
            testRenderContainsChildComponent(wrapper, 'img');
            testRenderContainsChildComponent(wrapper, Typography, 2);
        });
    });

    afterAll(() => {
        unmountComponent();
    });
});
