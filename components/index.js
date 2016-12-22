/**
 * Created by zhangyatao on 2016/12/21.
 */
import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Router, Route, hashHistory, IndexRoute, Redirect, IndexRedirect} from 'react-router';
import todoApp from './Todo/reducers';

import HelloWorld from './HelloWorld';
import About from './About';
import App from './App';
import Flux from './Flux';
import Home from './Home';
import Todo from './Todo';
// <Redirect from="/home" to="/"/>
// <IndexRoute component={Home}/>
const Root = (({store})=>(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/home"/>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/flux" component={Flux}/>
                <Route path="/todo" component={Todo}/>
                <Route path="/helloworld" component={HelloWorld}/>
            </Route>
        </Router>
    </Provider>
));

let store = createStore(todoApp);
ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
);