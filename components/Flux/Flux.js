/**
 * Created by zhangyatao on 2016/12/21.
 */
import React from 'react';
import ButtonActions from './ButtonActions';
import ListStore from './Store';
import MyButton from './MyButton';
class MyButtonController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ListStore.getAll()
        };
        this.createNewItem = this.createNewItem.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        ListStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        ListStore.removeChangeListener(this._onChange);
    }

    createNewItem() {
        console.log('[Flux.js] STEP 1:','触发this.createNewItem事件,执行Actions事件');
        ButtonActions.addNewItem('New Item');
    }

    _onChange() {
        console.log('[Flux.js] STEP 6:','接收到change事件,更新state,重新渲染DOM');
        this.setState({
            items: ListStore.getAll()
        })
    }

    render() {
        return (
            <MyButton items={this.state.items} onClick={this.createNewItem}/>
        )
    }
}
export default MyButtonController;