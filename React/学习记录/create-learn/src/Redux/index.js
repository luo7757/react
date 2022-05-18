// import { createStore, bindActionCreators, combineReducers } from 'redux';
import User from './reducer/Login/usersReducer';
import Login from './reducer/Login/loginUserReducer';
import {createOutLoginUserAction, createSetLoginUserAction} from './action/Login/loginUserAction';
import {createAddUserAction, createDeleteUserAction,createEditUserAction} from './action/Login/usersAction';



//  使用手写redux 
import { createStore } from '../myRedux';



// const Reducers = combineReducers({
//   User,
//   Login
// })
const combine = (state = {}, action) => {
  return {
    loginUser: Login(state.LoginUserReducer, action),
    users: User(state.UsersReducer, action)
  }
} // combineReducers 就是返回一个对象

const store = createStore(combine);

// const boundActions = bindActionCreators({
//   createOutLoginUserAction,
//   createSetLoginUserAction,
//   createAddUserAction,
//   createDeleteUserAction,
//   createEditUserAction
// }, store.dispatch)

// 
console.log(store, store.getState())

// const store = createStore(User); // 运行了一次
// Reducer 函数 在被注册的时候，会运行一次


store.subscribe(() => {
  console.log(store.getState(),"状态改变")
})


// boundActions.createAddUserAction({name:"王刚", id: 3})
// boundActions.createAddUserAction({name:"小黄", id: 2})
// store.dispatch(createSetLoginUserAction({name: '小明', id: 1})) // 数据变化导致全部reducer运行一次
// dispatch 会遍历整个对象 传递dispatch中的type值，运行所有函数

store.dispatch(createAddUserAction({name: "小红", id: 1}))
