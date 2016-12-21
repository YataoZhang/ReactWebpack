/**
 * Created by zhangyatao on 2016/12/21.
 */
import AppDispatcher from './AppDispatcher';
export default {
    addNewItem(text) {
        console.log('[ButtonActions.js] STEP 2:','Actions去执行Dispatcher的ADD_NEW_ITEM事件');
        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text: text
        })
    }
}