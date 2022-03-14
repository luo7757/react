import React, { Component } from 'react'
// 添加日志记录 
export default function withLog(Comp){
  class LogWrapper extends Component {

    componentDidMount(){
      console.log(this.props)
      console.log(`组件${Comp.name}创建了`, Date.now())
    }
  
    componentWillUnmount(){
      console.log(`组件${Comp.name}创建了`, Date.now())
    }
  
    render() {
      // 传递的 ref 和 属性都在 props中 解构获取
      // 在组件上绑定 ref 值 即可实现在使用高阶组件时，绑定 ref， ref可以绑定到高阶组件包装的组件上了
      const {forwardRef, ...reset} = this.props;
      return (
        <Comp ref={forwardRef} {...reset}/>
      )
    }
  }

  return React.forwardRef((props, ref)=> {
    // 当外部使用这个高阶组件时，这是一个 ref转发 函数 里面返回一个高阶组件
    // ref转发 提供一个ref 参数 我们将ref 传递到高阶组件上去 注意不能使用 ref 作为参数名
    // 不然会绑定到 高阶组件上 创建一个别名 传递 ref 
    return <LogWrapper forwardRef={ref} {...props}/>
  })
}
