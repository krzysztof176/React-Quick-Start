import React from 'react';
import MainPage from './MainPage';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    render() {
        return(
            <MainPage
            />
        );
    }
}

export default hot(module)(App);