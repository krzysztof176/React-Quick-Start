// Additional Packages
import _ from 'lodash';

// Pages
import LoadingPage from '../../src/pages/LoadingPage';

// Components
import GlobalNavbar from '../../src/components/GlobalNavbar';
import SnackBar from '../../src/components/SnackBar';

// Constants
import ScreenProperties from '../../src/constants/ScreenProperties';

// Mock Store
import store from '../../__mocks__/store';

// Test Utils
import {generateTestWrapperUtils, testRenderContainsChildComponent, expectToHaveBeenCalledTimes, expectCalledWith} from '../TestUtils';

// Test Component
import MainPage from '../../src/pages/MainPage';

const {constructShallowWrapper} = generateTestWrapperUtils({store});

describe('Main Page Tests', () => {
    describe('Class Functions', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = constructShallowWrapper(MainPage, {numberOfDives: 3, props: {}});
        });

        describe('componentDidMount', () => {
            test('Successful case when error is undefined', () => {
                wrapper.instance().loadData = jest.fn();
                wrapper.instance().componentDidMount();

                expect(wrapper.instance().mounted).toBe(true);
                expectToHaveBeenCalledTimes(wrapper.instance().loadData);
            });

            test('Successful case when error is defined', () => {
                wrapper.setProps({error: 'error', updateSelectedScreen: jest.fn()});
                wrapper.instance().componentDidMount();

                expect(wrapper.instance().mounted).toBe(true);
                expectCalledWith(wrapper.instance().props.updateSelectedScreen, [['errorPage']]);
            });
        });

        describe('componentDidUpdate', () => {
            test('Successful case', () => {
                wrapper.instance().checkForDataReady = jest.fn();
                wrapper.instance().checkForApplicationReady = jest.fn();
                wrapper.instance().postNotification = jest.fn();
                wrapper.instance().componentDidUpdate();

                expectToHaveBeenCalledTimes(wrapper.instance().checkForDataReady);
                expectToHaveBeenCalledTimes(wrapper.instance().checkForApplicationReady);
                expectToHaveBeenCalledTimes(wrapper.instance().postNotification);
            });
        });

        describe('componentWillUnmount', () => {
            test('Successful case', () => {
                wrapper.instance().componentWillUnmount();
                expect(wrapper.instance().mounted).toBe(false);
            });
        });

        describe('setSnackBarProperties', () => {
            test('Successful case', () => {
                const snackBarProperties = {};
                wrapper.instance().setSnackBarProperties(snackBarProperties);
                expect(wrapper.instance().state.snackBarProperties).toEqual(snackBarProperties);
            });
        });

        describe('postNotification', () => {
            beforeEach(() => {
                wrapper.setProps({removeNotification: jest.fn()});
                wrapper.setState({snackBarProperties: {enqueueSnackbar: jest.fn()}});
            });

            test('Successful case when notifications is empty ', () => {
                wrapper.instance().postNotification();
                expectToHaveBeenCalledTimes(wrapper.instance().state.snackBarProperties.enqueueSnackbar, 0);
                expectToHaveBeenCalledTimes(wrapper.instance().props.removeNotification, 0);
            });

            test('Successful case when notifications is not empty ', () => {
                const message = 'message';
                const notifications = [{message}];
                const notification = _.cloneDeep(notifications[0]);
                delete notification.message;
                wrapper.setProps({notifications});
                wrapper.instance().state.snackBarProperties.enqueueSnackbar.mockReset();
                wrapper.instance().props.removeNotification.mockReset();
                wrapper.instance().postNotification();

                expectCalledWith(wrapper.instance().state.snackBarProperties.enqueueSnackbar, [[message, notification]]);
                expectToHaveBeenCalledTimes(wrapper.instance().props.removeNotification, 1);
            });
        });

        describe('loadData', () => {
            test('Successful case', () => {
                wrapper.instance().checkForDataReady = jest.fn();
                wrapper.instance().loadData();
                expectToHaveBeenCalledTimes(wrapper.instance().checkForDataReady);
            });
        });

        describe('onScreenSelection', () => {
            test('Successful case', () => {
                const screenName = 'screenName';
                wrapper.setProps({updateSelectedScreen: jest.fn()});
                wrapper.instance().onScreenSelection(screenName);
                expectCalledWith(wrapper.instance().props.updateSelectedScreen, [[screenName]]);
            });
        });

        describe('checkForDataReady', () => {
            test('Successful case when data is ready', () => {
                wrapper.instance().generateAvailableScreens = jest.fn();
                wrapper.instance().checkForDataReady();

                expect(wrapper.instance().state.isDataReady).toBe(true);
            });
        });

        describe('checkForApplicationReady', () => {
            test('Successful case when application is ready', () => {
                wrapper.setState({isDataReady: true, snackBarProperties: {enqueueSnackbar: jest.fn(), closeSnackbar: jest.fn()}, availableScreens: [{children: []}]});
                wrapper.instance().checkForApplicationReady();
                expect(wrapper.instance().state.isApplicationReady).toBe(true);
            });

            test('Successful case when application is not ready', () => {
                wrapper.instance().checkForApplicationReady();
                expect(wrapper.instance().state.isApplicationReady).toBe(false);
            });
        });

        describe('generateAvailableScreens', () => {
            test('Successful case', () => {
                wrapper.instance().filterScreensBaseOnUserPermission = jest.fn();
                wrapper.instance().filterScreensBaseOnLabelHasChildren = jest.fn();
                wrapper.instance().generateAvailableScreens();
                expect(wrapper.instance().state.availableScreens.length).toBe(1);
            });
        });

        describe('filterScreensBaseOnMenuItem', () => {
            test('Successful case', () => {
                const screenProperties = _.cloneDeep(ScreenProperties);
                wrapper.instance().filterScreensBaseOnMenuItem(screenProperties);
                expect(screenProperties.length).toEqual(1);
            });
        });

        describe('lookUpSelectedScreenProperties', () => {
            test('Successful case', () => {
                const componentName = 'welcomePage';
                wrapper.setProps({selectedScreen: componentName});
                expect(wrapper.instance().lookUpSelectedScreenProperties(_.cloneDeep(ScreenProperties)).componentName).toBe(componentName);
            });

            test('Not successful case', () => {
                const componentName = 'screen';
                wrapper.setProps({selectedScreen: componentName});
                expect(wrapper.instance().lookUpSelectedScreenProperties(_.cloneDeep(ScreenProperties)).componentName).toBe('errorPage');
            });
        });
    });

    describe('DOM Render', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = constructShallowWrapper(MainPage, {numberOfDives: 3, props: {}});
        });

        test('Renders Components when data is ready', () => {
            wrapper.setState({isDataReady: true});
            testRenderContainsChildComponent(wrapper, LoadingPage, 0);
            testRenderContainsChildComponent(wrapper, GlobalNavbar, 0);
            testRenderContainsChildComponent(wrapper, SnackBar);
        });

        test('Renders Components when data is ready and application is ready', () => {
            wrapper.setState({isDataReady: true, isApplicationReady: true});
            testRenderContainsChildComponent(wrapper, LoadingPage, 0);
            testRenderContainsChildComponent(wrapper, GlobalNavbar);
            testRenderContainsChildComponent(wrapper, SnackBar);
        });
    });
});
