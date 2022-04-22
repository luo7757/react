import React, { PureComponent, useCallback, useMemo, useState } from 'react'

// class Test extends PureComponent {
//   render() {
//     console.log('Test render')
//     return (
//       <div>
//         <h1>{this.props.text}</h1>
//         <button onClick={() => {
//           this.props.click()
//         }}>改变文本</button>
//       </div>
//     )
//   }
// }

// function Parent() {
//   console.log('Parent render')
//   const [txt, setTxt] = useState(123)
//   const [n, setN] = useState(0)
//   // useMemo 第一次运行之后, 记录依赖项, 在依赖项没有改变的时候, 返回之前的数据
//   // useCallback 是返回之前的函数
//   const handleClick = useMemo(() => {
//     return () => {
//       setTxt(txt + 1)
//     }
//   }, [txt])


//   return (
//     <div>
//       <Test text={txt} click={}/>
//       <input type="number"  onChange={e => {
//         handleInputChange(e.target.value)
//       }} value={n}/>

//     </div>
//   )
// }



function Item(props){
  return (
    <div>
      {props.value}
    </div>
  )
}

export default function App () {

  const [range, setRange] = useState({min: 1, max: 10000})
  const [n, setN] = useState(0)

  const list = useMemo(() => {
    const list = [];
    for (let i = range.min; i < range.max; i++) {
      list.push(<Item key={i} value={i}></Item>)
    }
    console.log('list for')
    return list;
    // 使用 memo后 ,改变input的值,不会导致list组件被重新渲染了
  }, [range.min, range.max])
  // 只要

  // const list = [];
  // for (let i = 0; i < range.max; i++) {
  //   console.log('render')
  //   list.push(<Item key={i} value={i}></Item>)
  // }

  return (
    <div>
      {list}
      {/* 这里有个大数据组件, 兄弟组件的数据变化, 导致了这个组件全部重新渲染,显然是不行的,
      使用 Memo 持久化数据,数据没变组件不会重新渲染, 和 callback/state 里面的持久化方案差不多
      只是针对的类型不同, callback用于持久化函数,memo用于持久化数据
      */}
      <input type="number" value={n} onChange={(e) =>{
        setN(+(e.target.value))
      }}/>
    </div>
  )
}


