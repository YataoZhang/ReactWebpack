/**
 * Created by zhangyatao on 2016/12/21.
 */
import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, hashHistory, IndexRoute, Redirect, IndexRedirect} from 'react-router';
import HelloWorld from './HelloWorld';
import About from './About';
import App from './App';
import Flux from './Flux';
import Home from './Home';

// <Redirect from="/home" to="/"/>
// <IndexRoute component={Home}/>
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="/home"/>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/flux" component={Flux}/>
            <Route path="/helloworld" component={HelloWorld}/>
        </Route>
    </Router>,
    document.getElementById('root')
);