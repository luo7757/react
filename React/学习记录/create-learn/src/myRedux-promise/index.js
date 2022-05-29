import {isPlainObject, isString} from 'lodash'
import isPromise from 'is-promise'


export default store => next => action => {

}


/**
 * 判断一个action是不是一个标准的flux的action
 */
function isFSA(action) {
  // action 必须是一个平面对象 pline-object
  // action.type 必须是一个字符串
  // action的属性不能包含其他非标准属性，标准属性："type", "payload", "error", "meta"

  return isPlainObject(action) 
  && isString(action.type) 
  && Object.keys(action).every(key => ["type", "payload", "error", "meta"].includes(key));
}