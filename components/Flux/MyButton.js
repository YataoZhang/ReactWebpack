/**
 * Created by zhangyatao on 2016/12/21.
 */
import React from 'react';
export default function (props) {
    const items = props.items;
    return <div>
        <ul>
            {
                items.map((item, index)=><li key={index}>{item}</li>)
            }
        </ul>
        <button onClick={props.onClick}>new Item</button>
    </div>
}
