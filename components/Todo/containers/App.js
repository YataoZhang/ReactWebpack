/**
 * Created by zhangyatao on 2016/12/22.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters} from '../actions';
import AddTodo from '../components/AddTodo';
import Footer from '../components/Footer';
import TodoList from '../components/TodoList';

class App extends Component {
    static propTypes = {
        childPropVisibleTodos: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired).isRequired,
        childPropVisibilityFilter: PropTypes.oneOf([
            'SHOW_ALL',
            'SHOW_COMPLETED',
            'SHOW_ACTIVE'
        ]).isRequired
    };

    render() {
        // props就是store
        const {dispatch, childPropVisibleTodos, childPropVisibilityFilter} = this.props;
        return (
            <div>
                <AddTodo onAddClick={text=>dispatch(addTodo(text))}/>
                <TodoList todos={childPropVisibleTodos} onTodoClick={index=>dispatch(completeTodo(index))}/>
                <Footer
                    filter={childPropVisibilityFilter}
                    onFilterChange={nextFilter=>dispatch(setVisibilityFilter(nextFilter))}
                />
            </div>
        )
    }
}
function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo=>todo.completed === true);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo=>todo.completed !== false);
    }
}
/**
 * 设置容器组件的props
 * @param state store里面的数据
 * @returns {{childPropVisibleTodos, childPropVisibilityFilter: visibilityFilter}}
 */
function select(state) {
    return {
        childPropVisibleTodos: selectTodos(state.propTodos, state.propVisibilityFilter),
        childPropVisibilityFilter: state.propVisibilityFilter
    }
}
export default connect(select)(App);