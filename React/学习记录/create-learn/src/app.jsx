// import React, { useState } from 'react'
// 在react 中 提供useReducer

import React, { useReducer } from 'react'

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

// function useReducer(reducer, initalState){
//   // 传递一个数据修改方式 reducer 和 初始值 initalState

//   // 初始化一个 数据
//   const [state, setState] = useState(initalState);

//   const dispatch = (action) => {
//     // 数据变化函数 传递一个变化方式， 由reducer根据方式 来变化数据
//     const newState = reducer(state, action)
//     // 变化完 获得最新数据 修改state
//     setState(newState)
//   }
//   // 返回一个当前状态和状态修改函数 供外界使用
//   return [state, dispatch];
// }



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


