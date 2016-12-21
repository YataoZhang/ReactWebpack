/**
 * Created by zhangyatao on 2016/12/21.
 */
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <strong>Home Page</strong>
                <ul>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/helloworld">helloworld</Link></li>
                </ul>
            </div>);
    }
}