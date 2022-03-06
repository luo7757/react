import React, { Component } from "react";
import Mantle from './common/Mantle';
import img from './common/Mantle/1.webp';

// 封装一个 蒙层 
// 无状态组件 全部由父级控制
export default class MantleTest extends Component{
  constructor(props){
    super(props)
    this.state = {
      show: false
    }
  }
  render(){
    return (<div>
      <img src={img} alt="图片" style={{
        height:1000,
        width: 1000
      }} />
      <Mantle bgClose={() => this.setState({
        show: false
      })} btnClose={() => this.setState({show: false})} show={this.state.show}></Mantle>
      <div onClick={() => this.setState({
        show: true
      })}>打开蒙层</div>
    </div>)
  }
}