import React, { Component, useState } from 'react'

// export default class App extends Component {
//   state = {
//     n : 0,
//   }

//   setN = (n) => {
//     this.setState({
//       n
//     })
//   }
//   render() {
//     return (
//       <div>
//       useState的状态:{this.state.n}
//       <button type='button' onClick={() => {
//         this.setN(this.state.n - 1)
//       }}>-</button>
//       <button type='button' onClick={() => {
//         this.setN(this.state.n + 1)
//       }}>+</button>
//     </div>
//     )
//   }
// }


// window.arr = []
// // useState 在函数组件中使用
// export default function App () {
//   const [n, setN] = useState(0); // 使用一个状态，该状态的默认值是0 

//   const [visible, setVisible ] = useState(true);
//   // 横切一个关注点，这个状态只关注于显示隐藏
//   window.arr.push(setN) // 每次返回的函数都是同一个

//   return (
//     <div>
//       <p style={{
//         display: visible ? 'block' : "none"
//       }}>
//         useState的状态:{n}
//         <button type='button' onClick={() => {
//           setN(n - 1)
//         }}>-</button>
//         <button type='button' onClick={() => {
//           setN(n + 1)
//         }}>+</button>
//       </p>
//       <button onClick={() => {
//         setVisible(!visible)
//       }}>显示/隐藏</button>
//     </div>
//   )
// }

window.arr = [];

export default function App () {
  const [num, setNum] = useState(0)
  window.arr.push(setNum)
  // 状态修改函数，使用都是同一个函数
  console.log(window.arr[0] === window.arr[1])
  console.log('render')
  return (
    <div>
      状态数据：{num}

      <button onClick={() => {
        setNum(num + 1)
      }}>+</button>
      <button onClick={() => {
        setNum(num - 1)
      }}>-</button>
      <button onClick={() => {
        for(let i = 0; i <= Math.ceil(Math.random() * 10); i++){
          setNum(prev => prev + 1)
          // 多次修改使用函数 参数 prev 为上一次修改后的状态
        }
      }}>多次修改采用函数 +1 x N</button>

      <button onClick={() => {
        setNum({})
      }}>强制刷新,如果要保留数据，还要强制刷新，建议状态使用对象，这样可以保证数据不变，对象地址改变，从而重新渲染</button>
      <button onClick={() => {
        setNum(num)
      }}>数据使用Obejct.is对比发现一致，不会重新渲染</button>
    </div>
  )
}

