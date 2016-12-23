/**
 * Created by zhangyatao on 2016/12/21.
 */
import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Store from '../StateManager/Store';
import Router from './router';

const Root = (({store})=>(
    <Provider store={store}>
        <Router />
    </Provider>
));


let store = Store();

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
);