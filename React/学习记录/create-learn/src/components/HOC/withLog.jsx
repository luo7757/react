import React, { Component } from 'react'
// 添加日志记录 
export default function withLog(Comp){
  return class LogWrapper extends Component {

    componentDidMount(){
      console.log(`组件${Comp.name}创建了`, Date.now())
    }
  
    componentWillUnmount(){
      console.log(`组件${Comp.name}创建了`, Date.now())
    }
  
    render() {
      return (
        <Comp {...this.props}/>
      )
    }
  }
}
