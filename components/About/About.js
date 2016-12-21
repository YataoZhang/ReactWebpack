/**
 * Created by zhangyatao on 2016/12/21.
 */
import React, {Component, PropTypes} from 'react';
import {IndexLink} from 'react-router';
export default class About extends React.Component {
    render() {
        return (
            <div>
                <strong>About Page</strong>
                <IndexLink to="/" activeClassName="active">
                    Home
                </IndexLink>
            </div>);
    }
}
