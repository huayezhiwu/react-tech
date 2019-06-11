import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import FullDetail from './FullDetail';
import Player from './Player';

const Detail = () => (
    // <div>
    //     <h1>Detail</h1>
    // </div>
    <Switch>
        <Route exact path="/detail" component={FullDetail}></Route>
        <Route path="/detail/:number" component={Player}></Route>
    </Switch>
)


export default Detail;

