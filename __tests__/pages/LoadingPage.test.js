// Material UI
import {CircularProgress} from '@material-ui/core';

// Test Utils
import {generateTestWrapperUtils, testRenderContainsChildComponent} from '../TestUtils';

// Test Component
import LoadingScreenPage from '../../src/pages/LoadingPage';

const {constructMountedWrapper} = generateTestWrapperUtils();

describe('Loading Screen Page Tests', () => {
    let wrapper;
    let unmountComponent;

    beforeEach(() => {
        ({wrapper, unmountComponent} = constructMountedWrapper(LoadingScreenPage));
    });

    describe('DOM Render', () => {
        test('Renders Components', () => {
            testRenderContainsChildComponent(wrapper, 'img');
            testRenderContainsChildComponent(wrapper, CircularProgress);
        });
    });

    afterAll(() => {
        unmountComponent();
    });
});
