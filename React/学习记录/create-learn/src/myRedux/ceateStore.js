export default function createStore(reducer, defaultState){

  let currentStore = defaultState,
      currentReducer = reducer,
      i = 0,
      listen = new Map();

  function dispatch (action) {
    if(!isPlaneObject(action)){
      throw new TypeError("action must ba a plane object");
    }
    if(action.type === undefined || action.type === null){
      throw new TypeError("the type of the type property cannot be empty");
    }
    currentStore = currentReducer(currentStore, action);
    listen.forEach(it => it())
  }
  
  function getState () {
    return currentStore;
  }

  function subscribe (fn) {
    if(typeof fn !== "function"){
      throw new TypeError("the subscribe function parameter requires a function")
    }
    i ++;
    listen.set(i, fn)
    return (i) => {
      listen.delete(i)
    }
  }

  function initialStore() {
    dispatch({
      type: `@@redux@type${createKey(7)}`
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
  return Object.getPrototypeOf(obj) === Object.prototype;
}

function createKey (keyLength){
  return Math.random().toString(36).slice(2, 2 + keyLength);
}