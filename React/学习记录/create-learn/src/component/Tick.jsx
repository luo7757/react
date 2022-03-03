import React, { Component } from "react";

export class Tick extends Component{
  // 初始化状态 JS next 语法，
  // state = {
  //   num: this.props.number
  // }

  constructor(props){
    super(props)
    this.state = {
      // 初始化状态
      num : this.props.number
    }
    this.timer = setInterval(() => {
      // this.state.num --;
      // 直接改变状态 是无法实现数据变动的 react是重新调用render函数来 重新获取对应数据渲染
      // 通过setState方法继承自Componet 中，会调用组件的render方法并修改数据 重新生成一个虚拟dom
      // 再通过虚拟dom 找到真实dom 进行修改
      // if(this.state.num === 0){
      //   clearInterval(this.timer);
      //   return;
      // }
      this.setState({
        num: this.state.num - 1
      })
      if(this.state.num === 0){
        clearInterval(this.timer);
      }
    }, 1000)
  }
  render(){
    return (<h1>
      倒计时剩余时间：{this.state.num}
    </h1>)
  }
}