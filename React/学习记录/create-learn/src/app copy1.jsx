import React, { Component } from "react";

class A extends Component{
  render(){
    return (
      <h1>
        组件A
        <span ref={this.props.ref1}>{this.props.words}</span>
      </h1>
    )
  }
}
// function A(props, ref){
//   // 使用ref转发 必需添加第二个参数
//   console.log(ref);
//   return (
//     <h1>
//     组件A
//     <span ref={ref}>{props.words}</span>
//   </h1>
//   )
// }
// 传递函数组件A，得到一个新组 newA
// const NewA = React.forwardRef(A);
// 注意 之前的 ref 指向绑定对象，但是现在 通过React.forwardRef 创建的函数，在这个函数上绑定的 ref 需要我们自定义
// 通过 传递的 函数组件的参数 进行 ref 转发，在函数组件内多了个参数 ref
// 这里的 ref 我们就可以操作了

const NewA = React.forwardRef((props, ref) => {
  return <A {...props} ref1={ref}/>
})
// 这里包装 ref 有条件判断 使用 ref 只能在函数和 内置组件上使用
// 所有使用 ref1 保存 ref的指向
// 在 app 中的 ref 指向就指向了 类组件中的 ref1

export default class App extends Component{
  
  ARef = React.createRef();

  componentDidMount(){
    console.log(this.ARef);
  }
  render(){
    return (
     <div>
       {/* <A ref1={this.ARef}  words="ref值" /> 类组件使用方法1*/}
       <NewA ref={this.ARef}  words="ref值" />
     </div>
    )
  }
}
// 如果必需使用一个类组件 我们可以是变通一下， ref就是一个对象，xxx = {current: xxx} 这就是一个ref对象
// 不使用 ref 和 React.forwardRef 进行ref 转发，绕过 react的机制 进行操作
// 或者使用 一个函数包装一下就可以了