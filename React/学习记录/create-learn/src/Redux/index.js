import { createStore } from 'redux';

const reducer = (state, action) => {
  if(action.type === "increase"){
    return state + 1;
  }else if(action.type === "decrease"){
    return state - 1;
  }
  return state;
}
// createStore方法 两个参数 1、reduce 数据改变方法 2、数据初始值
const state = createStore(reducer, 10);

// subscribe 方法 在通过reduce改变数据后，就会触发。
state.subscribe(() => console.log(state.getState()))


//  dispatch（action ）  是数据的唯一改变方法
state.dispatch({type: "increase"})
state.dispatch({type: "increase"})
state.dispatch({type: "increase"})
state.dispatch({type: "decrease"})