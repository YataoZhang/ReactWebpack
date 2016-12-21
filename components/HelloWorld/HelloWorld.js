/**
 * Created by zhangyatao on 2016/12/21.
 */
import React from 'react';
import scss from './HelloWorld.scss';

export default class HelloWorld extends React.Component {
    render() {
        return <div className={scss.app}>Hello world</div>;
    }
}