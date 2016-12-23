/**
 * Created by zhangyatao on 2016/12/23.
 */
import {todos, visibilityFilter} from '../components/Todo/reducers';
import {selectedSubreddit, postsBySubreddit} from '../components/AsyncSubreddit/reducers';
import {combineReducers} from 'redux';
// 传入对象中的key就是Store对象的顶层key,value会先调用下后面的回掉函数,用来生成默认的State
export default combineReducers({
    propTodos: todos,
    propVisibilityFilter: visibilityFilter,
    selectedSubreddit,
    postsBySubreddit
});
// 全局Store的对象结构为
// Object
//     postsBySubreddit : Object
//     propTodos : Array[0]
//     propVisibilityFilter : "SHOW_ALL"
//     selectedSubreddit : "reactjs"
// 等同于
// function combineReducers(state = {}, action) {
//     return {
//         propTodos: todos(state.propTodos, action),
//         propVisibilityFilter: visibilityFilter(state.propVisibilityFilter, action),
//         selectedSubreddit: selectedSubreddit(state.selectedSubreddit, action),
//         postsBySubreddit: postsBySubreddit(state.postsBySubreddit, action)
//     }
// }