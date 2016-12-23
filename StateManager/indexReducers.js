/**
 * Created by zhangyatao on 2016/12/23.
 */
import {todos, visibilityFilter} from '../components/Todo/reducers';
import {selectedSubreddit, postsBySubreddit} from '../components/AsyncSubreddit/reducers';
import {combineReducers} from 'redux';
export default combineReducers({
    propTodos: todos,
    propVisibilityFilter: visibilityFilter,
    selectedSubreddit,
    postsBySubreddit
});
