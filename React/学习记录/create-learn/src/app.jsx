import React, { Component } from "react";
// import NumberInput from "./components/NumberInput";

import FormTest from './components/FormTest';
export default class App extends Component{
  state = {
    val: '',
    checked: false
  }
  render(){
    return (
      <div>
        {/* 默认情况下，这是一个非受控组件 */}
        {/* {<input></input>} */}

        
        {/* {<input type="text" value={this.state.val} onChange={e => this.setState({
          val: e.target.value
        })}></input>} */}
        {/* {<button onClick={() => {
          console.log(this.state.val)
        }}>获取文本框的值</button>} */}


       {/* <NumberInput></NumberInput> 一个受控组件 */}


       {/* <input type="checkbox" checked={this.state.checked} onChange={e => {
         this.setState({
          checked: !this.state.checked
         })
       }}></input> */}
        <FormTest />
      </div>
    )
  }
}