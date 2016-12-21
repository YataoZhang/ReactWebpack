/**
 * Created by zhangyatao on 2016/12/21.
 */
import {EventEmitter} from 'events';
import assign from  'object-assign';
const Store = assign({}, EventEmitter.prototype, {
    items: [],
    getAll() {
        return this.items;
    },
    AddNewItemHandler(text) {
        console.log('[Store.js] STEP 4:','将接收到的text放入Store的items数组中');
        this.items.push(text)
    },
    emitChang(){
        console.log('[Store.js] STEP 5:','触发Views中的change事件');
        this.emit('change');
    },
    addChangeListener(cb) {
        this.on('change', cb);
    },
    removeChangeListener(cb) {
        this.removeListener('change', cb)
    }
});

export default Store;
