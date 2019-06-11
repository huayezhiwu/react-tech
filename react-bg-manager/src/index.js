import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import zhCN from 'antd/lib/locale-provider/zh_CN';
// import 'antd/dist/antd.css';

import Router from './routers';
import configStore from './stores';

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router />
        </div>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
