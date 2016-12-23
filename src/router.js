/**
 * Created by zhangyatao on 2016/12/23.
 */
import {Router, Route, hashHistory, IndexRoute, Redirect, IndexRedirect} from 'react-router';
import HelloWorld from '../components/HelloWorld';
import About from '../components/About';
import App from '../components/App';
import Flux from '../components/Flux';
import Home from '../components/Home';
import Todo from '../components/Todo';
// <Redirect from="/home" to="/"/>
// <IndexRoute component={Home}/>
export default (
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
);