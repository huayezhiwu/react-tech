import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import MainComponent from './main';

export default () => {
    return (
        <HashRouter>
            <Route path="/" component={MainComponent} />
        </HashRouter>
    );
};
