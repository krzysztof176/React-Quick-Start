import React from 'react';

// Test Component
import {withRoot, snackbarOnClickDismiss, getSnackbarAction} from '../../src/assets/Jss/withRoot';

// Test Utils
import {expectCalledWith} from '../TestUtils';

describe('WithRoot Tests', () => {
    describe('withRoot', () => {
        test('Render withRoot without error', () => {
            const TestComponent = () => <p>Test</p>;
            withRoot(TestComponent)({});
        });
    });

    describe('snackbarOnClickDismiss', () => {
        const ref = {current: {closeSnackbar: jest.fn()}};
        const key = 'key';

        test('Successful case', () => {
            snackbarOnClickDismiss(ref, key)();
            expectCalledWith(ref.current.closeSnackbar, [[key]]);
        });
    });

    describe('getSnackbarAction', () => {
        const ref = {current: {closeSnackbar: jest.fn()}};
        const key = 'key';

        test('Successful case', () => {
            expect(getSnackbarAction(ref)(key)).toStrictEqual(expect.anything());
        });
    });
});
