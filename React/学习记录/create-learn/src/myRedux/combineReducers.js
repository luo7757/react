import isPlaneObject from '../components/utils/isPlaneObject';
import { default as keys} from '../components/utils/randomKey';
import { type } from '../components/utils/type';

function validateReducers (reducers) {
  if(type(reducers) !== "object"){
    throw new TypeError("The parameter of validateReducers must be a object")
  }
  if(!isPlaneObject(reducers)){
    throw new TypeError("validateReducers must be a plane object");
  }
  // debugger
  Object.values(reducers).forEach(reducer => {
    if(typeof reducer !== "function"){
      throw new Error("the chidren of reducers must be a function")
    }
    let state = reducer(undefined,{type: keys.INIT()});
    if(state === undefined || state === null){
      throw new Error("the children of reducers must a function and return cannot empty")
    }
    state = reducer(undefined,{type: keys.UNKNOWN()})
    if(state === undefined || state === null){
      throw new Error("the children of reducers must a function and return cannot empty")
    }
  })

  // 在 官方版本中，初始时，会传递两个值，进行reducer函数运行，检查不是返回undefined等空值的情况
}


export default function combineReducers(reducers) {
  validateReducers(reducers);
  // 验证通过 返回一个 reducer 函数，这个函数返回一个对象。对象key and value 分别是reducers中的值
  return (state = {}, action) => {
    return Object.entries(reducers).reduce((date, keys) => {
      date[keys[0]] = keys[1](state[keys[0]], action)
      return date;
    }, {})
  }
}