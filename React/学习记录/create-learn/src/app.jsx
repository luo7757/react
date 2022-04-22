import React, { PureComponent, useCallback, useState } from 'react'

class Test extends PureComponent {
  render() {
    console.log('Test render')
    return (
      <div>
        <h1>{this.props.text}</h1>
        <button onClick={() => {
          this.props.click()
          // this.props.click()
          // 这里传递123 的时候由于 useState里面会使用Object.is进行判断
          // 那么 新旧数据相等不会触发useState的去修改数据，就不会导致重新渲染
        }}>改变文本</button>
      </div>
    )
  }
}

function Parent() {
  console.log('Parent render')
  const [txt, setTxt] = useState(123)
  const [n, setN] = useState(0)
  const handleClick = useCallback(() => {
    setTxt(Math.random())
  }, [txt])
  const handleInputChange = useCallback((value) => {
    // 这里好像没办法 onChange获取e对象的函数还是每次都是新的
    setN(value)
  })
  return (
    <div>
      <Test text={txt} click={
        handleClick  
      }/>
      {/* <Test text={txt} click={(num) => {
        setTxt(num)
      }}/> */}
      {/* 这里传递的Test 的click函数每次重新渲染都会是一个新的函数,导致组件在数据没有变化的时候重新渲染了 */}
      <input type="number"  onChange={e => {
        handleInputChange(e.target.value)
      }} value={n}/>
      {/* 这俩个组件都只是改变自己的值,却导致另一个组件也重新渲染了,其主要问题就是在传递的函数上面
        使用() => {callback} 这种方式每次传递的都是一个新的箭头函数,导致对比失败,触发重新渲染
      ,可以直接传递函数下去,不使用箭头函数,但是如果数据的变化要自己控制,那么就不行了,
      使用 useCallback 固定函数引用,同时数据改变控制权又在自己手上
      */}
    </div>
  )
}



export default function App () {
  return (
    <div>
      <Parent />
    </div>
  )
}


