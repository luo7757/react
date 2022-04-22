import React, { useState } from 'react'
// 在react 中 提供useReducer 这个useRucer 有第三个参数，是一个函数，这个参数的返回值会作为初始值

// 

// import React, { useReducer } from 'react'

function nReducer(state, action){
  switch (action){
    case "increase":
      return state + 1;
    case "decrease": 
      return state - 1;
    default:
      return state;
  }
}

function useReducer(reducer, initalState, init){
  // 传递一个数据修改方式 reducer 和 初始值 initalState

  // 初始化一个 数据
  let inital = initalState;

  if(init && typeof init !== "function"){
    throw new Error('参数类型传递错误')
  }else{
    // 传递了初始化函数 ，将初始值传递进函数后的返回值，作为最终初始值
    inital = init(initalState)
  }

  const [state, setState] = useState(inital);

  const dispatch = (action) => {
    // 数据变化函数 传递一个变化方式， 由reducer根据方式 来变化数据
    const newState = reducer(state, action)
    // 变化完 获得最新数据 修改state
    setState(newState)
  }

  // 返回一个当前状态和状态修改函数 供外界使用
  return [state, dispatch];
}



export default function App () {
  const [n, dispatch] = useReducer(nReducer, 0)
  return (
    <div>
      <div>
        <span>{n}</span>
      </div>
      <div>
        <button onClick={() => dispatch('increase')}>+</button>
        <button onClick={() => dispatch('decrease')}>-</button>
      </div>
    </div>
  )
}


