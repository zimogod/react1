//从redux中获取数据仓库API
// import { createStore,applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// //谷歌浏览器插件调试工具，相当于vuex
// import { composeWithDevTools } from 'redux-devtools-extension';
// // 将reducer整体引入进来
// import reducers from './reducer';
// //将reducer注入store仓库中
// const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
// //暴露出去
// export default store;

import { createStore,applyMiddleware } from 'redux';
//applyMiddleware:中间件 处理异步函数调用   异步操作
import { addnum } from './reducer';

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

const store = createStore(addnum,composeWithDevTools(applyMiddleware(thunk)));

export default store;