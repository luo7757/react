import User from '../Redux/reducer/Login/usersReducer';
import Login from '../Redux/reducer/Login/loginUserReducer';

export { default as createStore } from './ceateStore';
export { default as bindActionCreators } from './bindActionCreators'


export const combine = (state = {}, action) => {
  return {
    loginUser: Login(state.LoginUserReducer, action),
    users: User(state.UsersReducer, action)
  }
} // combineReducers 就是返回一个对象