import React, { Component } from "react";

import ThreeLayout from './component/common/ThreeLayout';

export default class App extends Component{
  render(){
    return (
      <div className="app-container" style={{
        height: 300
      }}>
        <ThreeLayout leftWidth={200} rightWidth={200} left={<div>左边</div>} right={<div>右边</div>}>
          <div>居中</div>
        </ThreeLayout>
      </div>
    )
  }
}