import React, { Component } from "react";

function A(props, ref){
  // 使用ref转发 必需添加第二个参数
  console.log(ref);
  return (
    <h1>
    组件A
    <span ref={ref}>{props.words}</span>
  </h1>
  )
}
// 传递函数组件A，得到一个新组 newA
const NewA = React.forwardRef(A);
// 注意 之前的 ref 指向绑定对象，但是现在 通过React.forwardRef 创建的函数，在这个函数上绑定的 ref 需要我们自定义
// 通过 传递的 函数组件的参数 进行 ref 转发，在函数组件内多了个参数 ref
// 这里的 ref 我们就可以操作了

export default class App extends Component{
  
  ARef = React.createRef();

  componentDidMount(){
    console.log(this.ARef);
  }
  render(){
    return (
     <div>
       <NewA ref={this.ARef}  words="ref值" />
     </div>
    )
  }
}