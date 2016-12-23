## React + Webpack 简单示例

打包公共资源
```bash
npm run dll
```


打包项目资源
```bash
npm run build
```

-------------

## redux

### 三大原则

1. 单一数据源
2. State是只读的 
3. 使用纯函数（reducers）来修改

#### State为单一数据源
整个应用中的state被存储在一颗对象树上，并且这个对象树只存在于唯一一个store中。也就是说这个应用只需创建一个stroe，应用中所有的state都存在这一个store中。

#### State是只读的，修改只能通过Action
唯一改变State的方法就是通过action去触发，action是一个用于描述已发生事件的普通对象。

#### 使用纯函数（reducers）来修改State
只能使用reducers来处理逻辑，根据传入的action对象判断执行逻辑和返回结果。

-------------

### Action
Action是把数据从应用传到Store的有效负荷。它是Store的唯一来源。

* Action对象
* Action函数

dispatch函数接收一个Action普通对象，可以传入已配置好的Action对象，也可以传入一个Action函数，来动态生成Action对象。

-------------

### Reducer
Action只是描述了有事情发生，并没有指明应用应该如何更新State，所以这就是Reducer存在的原因。

Reducer必须是一个纯函数：

1. 不会修改参数
2. 没有副作用
3. 不会调用非纯函数

Reducer的函数签名为
```javascript
function reducer(state = initialState, action) {};
```
state为Store中存储的State对象，action为Action普通对象。

**Redux中的combineReducers函数会根据传入的键值对的key和value自动选择Store中的State对象**

-------------

### Store

Action用来描述发生了什么事，Reducer来根据Action更新State。
