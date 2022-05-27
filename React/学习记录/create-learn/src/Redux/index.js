//  使用手写redux 
import { combine } from '../myRedux/index';
import { createStore, bindActionCreators } from '../myRedux';
import applyMiddleware from '../myRedux/applyMiddleware';

import { createGetStudentAllAction, createAddUserAction } from './action/Login/usersAction'

// logger 中间件 调试使用
import logger from 'redux-logger';

// 副作用处理中间件
// import thunk from 'redux-thunk';
import thunk from '../myRedux-thunk';


const store = applyMiddleware(thunk,logger)(createStore)(combine);
store.dispatch(createAddUserAction({name: "小明", id: 1}))
store.dispatch(createGetStudentAllAction())
setTimeout(() => {
  console.log(store.getState())
}, 1000)