import React from 'react';

// Additional Packages
import ReactDOM from 'react-dom';

// Pages
import App from './pages/App';

let startedReact = false;

export const renderApp = (error) => {
    ReactDOM.render((
        <App
            error={error}
        />
    ), document.getElementById('root'));
};

export const renderError = (error) => {
    console.error(error);
    renderApp(error);
};

export const startReact = () => {
    if (startedReact) {
        return;
    }

    startedReact = true;
    renderApp();
};

startReact();
