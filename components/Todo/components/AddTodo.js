/**
 * Created by zhangyatao on 2016/12/22.
 */
import React, {Component, PropTypes} from 'react';
export default class AddTodo extends Component {
    static propTypes = {
        onAddClick: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click() {
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }

    render() {
        return (
            <div>
                <input type="text" ref="input"/>
                <button onClick={this.click}>Add</button>
            </div>
        )
    }
}