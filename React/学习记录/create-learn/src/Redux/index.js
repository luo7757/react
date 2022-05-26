// import { createStore, bindActionCreators, combineReducers } from 'redux';
import {createOutLoginUserAction, createSetLoginUserAction} from './action/Login/loginUserAction';
import {createAddUserAction, createDeleteUserAction,createEditUserAction} from './action/Login/usersAction';
import { combine } from '../myRedux/index'


//  使用手写redux 
import { createStore, bindActionCreators } from '../myRedux';

// import { applyMiddleware } from 'redux';
import applyMiddleware from '../myRedux/applyMiddleware';

const Test1 = store => next => action => {
  console.log('旧数据1', store.getState())
  next(action)
  console.log("改变方式1",action)
  console.log("新数据1", store.getState())
} 

const Test2 = store => next => action => {
  console.log('旧数据2', store.getState())
  next(action)
  console.log("改变方式2",action)
  console.log("新数据2", store.getState())
} 


//const combine = (state = {}, action) => {
//   return {
//     loginUser: Login(state.LoginUserReducer, action),
//     users: User(state.UsersReducer, action)
//   }
// } // combineReducers 就是返回一个对象

// 通过applyMiddleware 进行中间件绑定
const store = applyMiddleware(Test1, Test2)(createStore)(combine);
console.log(store)

// const store = createStore(combine);

const boundActions = bindActionCreators({
  createOutLoginUserAction,
  createSetLoginUserAction,
  createAddUserAction,
  createDeleteUserAction,
  createEditUserAction
}, store.dispatch)

// 
// console.log(store, store.getState())

// const store = createStore(User); // 运行了一次
// Reducer 函数 在被注册的时候，会运行一次


// store.subscribe(() => {
//   console.log(store.getState(),"状态改变")
// })


boundActions.createAddUserAction({name:"王刚", id: 3})
boundActions.createAddUserAction({name:"小明", id: 4})
store.dispatch(createSetLoginUserAction({name: '小明', id: 1})) // 数据变化导致全部reducer运行一次
// dispatch 会遍历整个对象 传递dispatch中的type值，运行所有函数

// store.dispatch(createAddUserAction({name: "小红", id: 1}))
// store.dispatch(createAddUserAction({name: "小黄", id: 2}))
// store.dispatch({type: "WDADW", payload: {name:"test"}})
// boundActions.createDeleteUserAction({id: 3})
// boundActions.createEditUserAction({name: "修改", id: 1})