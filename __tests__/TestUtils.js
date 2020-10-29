import React from 'react';

// Material UI
import {createShallow, createMount} from '@material-ui/core/test-utils';

const generateTestWrapperUtils = (defaultProps = {}) => ({
    constructShallowWrapper: (Component, {numberOfDives, props = {}}) => {
        const finalProps = {...defaultProps, ...props};
        const shallow = createShallow();
        let wrapper = shallow(<Component {...finalProps} />);

        for (let i = 0; i < numberOfDives; i++) {
            wrapper = wrapper.dive();
        }

        return wrapper;
    },

    constructMountedWrapper: (Component, {props = {}} = {}, Provider = undefined) => {
        const finalProps = {...defaultProps, ...props};
        const mount = createMount();
        const wrapper = Provider ? mount(
            <Provider>
                <Component {...finalProps} />
            </Provider>,
        ) : mount(<Component {...finalProps} />);

        return {
            wrapper,
            unmountComponent: mount.cleanUp,
        };
    },
});

const testRenderContainsChildComponent = (wrapper, childComponent, numberOfChildren = 1) => expect(wrapper.find(childComponent)).toHaveLength(numberOfChildren);

// [Call][Arg]
const expectCalledWith = (fn, calls) => expect(fn.mock.calls).toEqual(calls);
const expectToHaveBeenCalledTimes = (fn, times = 1) => expect(fn).toHaveBeenCalledTimes(times);

export {
    generateTestWrapperUtils,
    testRenderContainsChildComponent,
    expectCalledWith,
    expectToHaveBeenCalledTimes,
};
