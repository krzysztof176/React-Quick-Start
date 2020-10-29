import React from 'react';

// Pages
import ErrorPage from '../pages/ErrorPage';
import WelcomePage from '../pages/WelcomePage';

const ScreenProperties = [
    {
        displayName: 'Error',
        componentName: 'errorPage',
        component: <ErrorPage message="A System Error Has Occurred"> </ErrorPage>,
        isMenuItem: false,
        requireAuthentication: true,
        parent: false,
        children: [],
    },
    {
        displayName: 'Welcome',
        componentName: 'welcomePage',
        component: <WelcomePage />,
        isMenuItem: true,
        requireAuthentication: false,
        parent: true,
        children: [],
    },
];

export default ScreenProperties;
