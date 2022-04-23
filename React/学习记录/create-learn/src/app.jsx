import React, { useEffect, useRef, useState } from 'react'

// window.arr = []
// // const inputRef = React.createRef();

// export default function App() {
//   const inputRef = useRef();
//   const [n, setN] = useState(0)
//   window.arr.push(inputRef)
//   console.log('App render')
//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button type='button' onClick={() => {
//         console.log(inputRef.current)
//       }}>输出ref对象</button>
//       <div>{n}</div>
//       <button type='button' onClick={() => {
//         setN(Math.random())
//       }}>改变</button>
//     </div>
//   )
// }

let timer;
export default function App() {
  const [n, setN] = useState(10)
// 如果 这个组件会使用多次,那么就会存在多个timer,就要保证 timer 彼此不会重复
// 使用 useRef 可以使其每个新的 timer 保留其地址,成为独立的timer

  const timerRef = useRef()
  useEffect(() => {
    if(n === 0) return;
    timerRef.current = setTimeout(() => {
      setN(n - 1);
    }, 1000)
    return () => {
      clearTimeout(timerRef.current);
    }
  }, [n])

  return (
    <div>
      {n}
      <Test />
    </div>
  )
}

function Test() {
  const [n, setN] = useState(10)
  const nRef = useRef(n)
  useEffect(() => {
    const timer = setInterval(() => {
      nRef.current --;
      setN(nRef.current)
      if(nRef.current === 0){
        clearInterval(timer)
      }
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      {nRef.current}
    </div>
  )
}