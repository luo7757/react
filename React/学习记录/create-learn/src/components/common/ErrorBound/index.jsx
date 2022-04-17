import React, { PureComponent } from 'react'

export default class ErrorBound extends PureComponent {
  state = {
    hsError: false
  }
  
  static getDerivedStateFromError(error){
    // 根据其俩个函数的运行时间点 做区分
    // 这个函数主要用于修改状态
    console.log('错误发生，修改状态')
    return {
      hasError: true
    }
  }

  componentDidCatch(error, info){
    // 主要用于记录错误信息
    console.log(error, info, '错误发生,记录信息')
    this.setState({
      hasError: true
    })
  }

  render() {
    // 无法捕获错误二：自身出现错误
    // throw new Error()

    // 子组件渲染过程中抛出错误 捕获运行函数 改变组件状态 运行其他渲染方案
    if(this.state.hasError){
      return (
        <div>出错了</div>
      )
    }

    return (
      <div>正常渲染
        <ChildA />
      </div>
    )
  }
}

function ChildA() {
  // throw new Error()
  // 子组件出现错误 自身没有处理 函数 向上抛出

  // 无法捕获的错误情况一：异步出现错误
  setTimeout(() =>{
    throw new Error()
  }, 1000)

  // 无法捕获的错误三： 事件出现的错误
  return (
    <>
      <div onClick={() => {
        throw new Error()
      }}>ChildA</div>
    </>
  )
}
