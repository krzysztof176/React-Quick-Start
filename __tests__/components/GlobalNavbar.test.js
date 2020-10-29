// Material UI
import {Avatar, Drawer} from '@material-ui/core';

// Constants
import ScreenProperties from '../../src/constants/ScreenProperties';

// Test Utils
import {expectCalledWith, generateTestWrapperUtils, testRenderContainsChildComponent} from '../TestUtils';

// Test Component
import GlobalNavbar from '../../src/components/GlobalNavbar';

const {constructShallowWrapper} = generateTestWrapperUtils({
    appName: 'app',
    availableScreens: [],
    selectedScreenProperties: {},
    onScreenSelection: jest.fn(),
});

describe('GlobalNavbar Component Tests', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = constructShallowWrapper(GlobalNavbar, {
            numberOfDives: 1,
        });
    });

    describe('Class Functions', () => {
        describe('setMenuVisible', () => {
            test('Successful case', () => {
                wrapper.instance().setMenuVisible(true)();
                expect(wrapper.instance().state.menuVisible).toBe(true);
            });
        });

        describe('onLabelClick', () => {
            test('Successful case', () => {
                const screenName = 'screenName';
                wrapper.instance().onLabelClick(screenName)();

                expectCalledWith(wrapper.instance().props.onScreenSelection, [[screenName]]);
                expect(wrapper.instance().state.menuVisible).toBe(false);
            });
        });

        describe('onIconClick', () => {
            test('Successful case when node id is not in treeViewExpanded', () => {
                const nodeId = 'screenName';
                wrapper.setState({treeViewExpanded: []});

                wrapper.instance().onIconClick(nodeId)();
                expect(wrapper.instance().state.treeViewExpanded).toEqual([nodeId]);
            });

            test('Successful case when node id is in treeViewExpanded', () => {
                const nodeId = 'screenName';
                wrapper.setState({treeViewExpanded: [nodeId]});

                wrapper.instance().onIconClick(nodeId)();
                expect(wrapper.instance().state.treeViewExpanded).toEqual([]);
            });
        });

        describe('generateTreeItems', () => {
            test('Successful case', () => {
                expect(wrapper.instance().generateTreeItems(ScreenProperties, true)).toStrictEqual(expect.anything());
            });
        });
    });

    describe('DOM Render', () => {
        test('Render when profileDetails is not loaded', () => {
            wrapper.setProps({profileDetails: {}});
            testRenderContainsChildComponent(wrapper, Avatar);
            testRenderContainsChildComponent(wrapper, Drawer);
        });

        test('Render when error is passed', () => {
            wrapper.setProps({error: 'error'});
            testRenderContainsChildComponent(wrapper, Avatar);
            testRenderContainsChildComponent(wrapper, Drawer, 0);
        });
    });
});
