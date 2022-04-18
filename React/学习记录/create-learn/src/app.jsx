import React, { Component } from 'react'

// 节点类型
export default class App extends Component {
  render() {
    return (
      <div>
        <ChildA />
        <ChildB />
        {ChildC}
        {ChildD}
        {ChildE}
        {ChildF}
      </div>
    )
  }
}

const ChildF = [2,3,4,5,6]
// 数组节点

const ChildE = null;
// empty 节点

const ChildD = '字符串节点'

const ChildC = <div>dom节点</div>

class ChildA extends Component{
  render(){
    return (
      <div>类节点</div>
    )
  }
}

function ChildB() {
  return (
    <>
      <div>函数节点</div>
    </>
  )
}

