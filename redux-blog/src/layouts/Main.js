import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Detail from '../views/Detail';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/detail" component={Detail}></Route>
        </Switch>
    </main>
)

export default Main;