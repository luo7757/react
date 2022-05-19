import { default as keys } from "../components/utils/randomKey";

export default function createStore(reducer, defaultState){

  let currentStore = defaultState,
      currentReducer = reducer,
      i = 0,
      listen = new Map(); // 发布订阅模式 函数保存

  function dispatch (action) {
    if(!isPlaneObject(action)){
      throw new TypeError("action must ba a plane object");
    }
    if(action.type === undefined || action.type === null){
      throw new TypeError("the type of the type property cannot be empty");
    }
    currentStore = currentReducer(currentStore, action);
    listen.forEach(it => it()); // 发布
  }
  
  function getState () {
    return currentStore; // 返回状态
  }

  function subscribe (fn) {
    // 订阅
    if(typeof fn !== "function"){
      throw new TypeError("the subscribe function parameter requires a function")
    }
    i ++;
    listen.set(i, fn)
    return (i) => {
      if(!listen.has(i)){
        return;
      } 
      listen.delete(i)
    }
  }

  function initialStore() {
    dispatch({
      type: keys.INIT()
    })
  }


  initialStore()

  return {
    dispatch,
    getState,
    subscribe
  }
}

function isPlaneObject(obj) {
  if (typeof obj !== "object") {
    return false;
  }
  return Object.getPrototypeOf(obj) === Object.prototype;
}

