import { type } from '../components/utils/type'
/**
 * 
 * @param {object or function} actions 对象：返回一个对象，对象的key为action， 函数 直接返回一个函数 
 * @param {function} dispatch 分发函数
 */

export default function bindActionCreators (actions, dispatch) {
  if(typeof actions === "function"){
    // 直接返回一个函数, 这个函数接收一个参数action
    return (action) => {
      if(Object.getPrototypeOf(action) !== Object.prototype){
        throw new TypeError("action must be a plane object");
      }
      dispatch(action)
    }
  }else if(type(actions) === "object"){
    const obj = {};
    const keys = Object.keys(actions)
    keys.forEach(key => {
      obj[key] = (action) => {
        dispatch(actions[key](action))
      }
    })
    return obj;
  }else {
    throw new TypeError("the actions parameter of bindActionCreator can only be a function or object")
  }
}

