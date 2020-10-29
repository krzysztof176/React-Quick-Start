import ReactDOM from 'react-dom';

// Test Component
import {renderApp, renderError, startReact} from '../src/index';

// Components
import {expectToHaveBeenCalledTimes} from './TestUtils';

jest.mock('react-dom', () => ({
    render: jest.fn(),
}));

describe('Index Tests', () => {
    beforeEach(() => {
        ReactDOM.render = jest.fn();
    });

    describe('renderApp', () => {
        test('Successful Case', () => {
            renderApp();
            expectToHaveBeenCalledTimes(ReactDOM.render);
        });
    });

    describe('renderError', () => {
        test('Successful Case', () => {
            console.error = jest.fn();
            renderError();
            expectToHaveBeenCalledTimes(ReactDOM.render);
        });
    });

    describe('startReact', () => {
        test('Successful Case', () => {
            startReact();
            expectToHaveBeenCalledTimes(ReactDOM.render, 0);
        });
    });
});
