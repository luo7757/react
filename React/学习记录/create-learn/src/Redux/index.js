// import { createStore, bindActionCreators, combineReducers } from 'redux';
import {createOutLoginUserAction, createSetLoginUserAction} from './action/Login/loginUserAction';
import {createAddUserAction, createDeleteUserAction,createEditUserAction} from './action/Login/usersAction';
import { combine } from '../myRedux/index'


//  使用手写redux 
import { createStore, bindActionCreators } from '../myRedux';

// import { applyMiddleware } from 'redux';
import applyMiddleware from '../myRedux/applyMiddleware';

import logger from 'redux-logger'
// logger 中间件 调试使用

const store = applyMiddleware(logger)(createStore)(combine);
console.log(store)


const boundActions = bindActionCreators({
  createOutLoginUserAction,
  createSetLoginUserAction,
  createAddUserAction,
  createDeleteUserAction,
  createEditUserAction
}, store.dispatch)



boundActions.createAddUserAction({name:"王刚", id: 3})
boundActions.createAddUserAction({name:"小明", id: 4})
store.dispatch(createSetLoginUserAction({name: '小明', id: 1}))