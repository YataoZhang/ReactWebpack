/**
 * Created by zhangyatao on 2016/12/21.
 */
import {Dispatcher} from 'flux';
import ListStore from './Store';
const dispatcher = new Dispatcher();
export  default dispatcher;
dispatcher.register((action)=> {
    switch (action.actionType) {
        case 'ADD_NEW_ITEM':
            console.log('[AppDispatcher.js] STEP 3:','执行Store的AddNewItemHandler和emitChange事件');
            ListStore.AddNewItemHandler(action.text);
            ListStore.emitChang();
            break;
        default:
            break;
    }
});