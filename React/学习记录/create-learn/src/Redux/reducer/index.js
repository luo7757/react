import ActionType from '../action/action-type';
import * as LoginUserReducer from '../reducer/Login/loginUserReducer';
import * as UsersReducer from '../reducer/Login/usersReducer';

// export const reducer = (state, action, payload) => {
//   console.log("Reducer 运行了")
//   // reducer 函数会在初始化时 运行一次，
//   if(action.type === ActionType.INCREASE){
//     return state + 1;
//   }else if(action.type === ActionType.DECREASE){
//     return state - 1;
//   }else if(action.type === ActionType.SET){
//     return state = action.payload
//   }
//   return state;
// }

export const reducer = (state, action, payload) => {
  // reducer 函数会在初始化时 运行一次，
  if(action.type === ActionType.INCREASE){
    return state + 1;
  }else if(action.type === ActionType.DECREASE){
    return state - 1;
  }else if(action.type === ActionType.SET){
    return state = action.payload
  }
  return state;
}