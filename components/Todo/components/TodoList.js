/**
 * Created by zhangyatao on 2016/12/22.
 */
import React, {Component, PropTypes} from 'react';
import Todo from './Todo';
export default class TodoList extends Component {
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired).isRequired,
        onTodoClick: PropTypes.func.isRequired
    };

    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index)=> {
                    return <Todo {...todo} key={index} onClick={()=>this.props.onTodoClick(index)}/>
                })}
            </ul>
        )
    }
}