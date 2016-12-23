/**
 * Created by zhangyatao on 2016/12/23.
 */
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import IndexReducers from './indexReducers';
export default (preloadState)=> {
    return createStore(
        IndexReducers,
        preloadState,
        applyMiddleware(
            thunkMiddleware,
            createLogger()
        )
    )
};