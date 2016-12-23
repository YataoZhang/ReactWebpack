/**
 * Created by zhangyatao on 2016/12/23.
 */
import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, IndexRoute, Redirect, IndexRedirect} from 'react-router';
import HelloWorld from '../components/HelloWorld';
import About from '../components/About';
import App from '../components/App';
import Flux from '../components/Flux';
import Home from '../components/Home';
import Todo from '../components/Todo';
import AsyncSubreddit from '../components/AsyncSubreddit';
// <Redirect from="/home" to="/"/>
// <IndexRoute component={Home}/>
import Store from '../StateManager/Store';
let store = Store();
const Root = () => (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/home"/>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/flux" component={Flux}/>
                <Route path="/todo" component={Todo}/>
                <Route path="/helloworld" component={HelloWorld}/>
                <Route path="/async" component={AsyncSubreddit}/>
            </Route>
        </Router>
    </Provider>
);
export default Root;