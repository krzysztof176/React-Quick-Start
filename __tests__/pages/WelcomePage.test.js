// Test Utils
import {generateTestWrapperUtils, testRenderContainsChildComponent} from '../TestUtils';

// Test Component
import WelcomePage from '../../src/pages/WelcomePage';

const {constructMountedWrapper} = generateTestWrapperUtils();

describe('Welcome Page Tests', () => {
    let wrapper;
    let unmountComponent;

    beforeEach(() => {
        ({wrapper, unmountComponent} = constructMountedWrapper(WelcomePage));
    });

    describe('DOM Render', () => {
        test('Renders Components', () => {
            testRenderContainsChildComponent(wrapper, 'img');
        });
    });

    afterAll(() => {
        unmountComponent();
    });
});
