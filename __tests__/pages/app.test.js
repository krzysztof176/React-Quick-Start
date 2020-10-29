// Pages
import MainPage from '../../src/pages/MainPage';

// Test Utils
import {generateTestWrapperUtils, testRenderContainsChildComponent} from '../TestUtils';

// Test Component
import App from '../../src/pages/App';

jest.mock('../../src/pages/MainPage');

const {constructMountedWrapper} = generateTestWrapperUtils();

describe('App Page Tests', () => {
    describe('DOM Render', () => {
        const {wrapper, unmountComponent} = constructMountedWrapper(App);

        test('Renders Main Page', () => {
            testRenderContainsChildComponent(wrapper, MainPage);
        });

        afterAll(() => {
            unmountComponent();
        });
    });
});
