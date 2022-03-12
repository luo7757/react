import React, { Component } from 'react'

export default class Ref extends Component {
 handleClick = () => {
  this.txt.innerText = "尼玛";
  this.setState({});
 }
 componentDidMount(){
  // 在挂载完成后就可以使用 ref 来操作元素/组件了
  console.log('DidMount')
 }
 getRef = (el) => {
  this.txt = el;
  console.log('只会运行一次')
 }

  render() {
    return (
      <div>
       {/* <div ref={el => {
       this.txt = el;
       console.log("ref绑定函数被调用了",el)
      }}>卧槽</div> */}
      <div ref={this.getRef}>运行一次</div>
      <button onClick={this.handleClick}>点击</button>
      </div>
    )
  }
}
