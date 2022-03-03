import React, { Component } from "react";
import './ball.css';

export class Ball extends Component{
  constructor(props){
    super(props)
    // 传递初始参数
    this.state = {
      ...props
    }
    this.winHeight = document.documentElement.clientHeight - 100;
    this.winWidth = document.documentElement.clientWidth - 100;
    // this.start();
    setInterval(() => {
      let obj = {...this.state};
      obj.top = obj.top + obj.ySpeed;
      obj.left = obj.left + obj.xSpeed;
      // console.log(obj);
      // eslint-disable-next-line default-case
      switch(true){
        case obj.top >= this.winHeight: 
          obj.top = this.winHeight;
          obj.ySpeed = -obj.ySpeed;
          break;
        case obj.top <= 0:
          obj.top = 0
          obj.ySpeed = -obj.ySpeed
          break;
        case obj.left >= this.winWidth:
          obj.left = this.winWidth;
          obj.xSpeed = -obj.xSpeed;
          break;
        case obj.left <= 0:
          obj.left = 0;
          obj.xSpeed = -obj.xSpeed;
      }
      this.setState({...obj})
    }, 16);
  }
  start(){
    // 这里使用别报错 这个时候组件还没有注册 得看生命周期
    let obj = {...this.state};
    obj.top = obj.top + obj.ySpeed;
    obj.left = obj.left + obj.xSpeed;
    console.log(obj);
    // eslint-disable-next-line default-case
    switch(true){
      case obj.top >= this.winHeight: 
        obj.top = this.winHeight;
        obj.ySpeed = -obj.ySpeed;
        break;
      case obj.top <= 0:
        obj.top = 0
        obj.ySpeed = -obj.ySpeed
        break;
      case obj.left >= this.winWidth:
        obj.left = this.winWidth;
        obj.xSpeed = -obj.xSpeed;
        break;
      case obj.left <= 0:
        obj.left = 0;
        obj.xSpeed = -obj.xSpeed;
    }
    this.setState({...obj})
  }
  render(){
    return (
      <div className="ball" style={{
        top: this.state.top,
        left: this.state.left, 
        backgroundColor: this.state.color
      }}></div>
    )
  }
}