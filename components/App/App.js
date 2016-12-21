/**
 * Created by zhangyatao on 2016/12/21.
 */
import React, {Component, PropTyps} from 'react';
import './App.scss';
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>);
    }
}