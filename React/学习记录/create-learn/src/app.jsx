import React, { Component } from "react";
// import Test from './components/common/CheckBoxGroup/test';
// import ThreeLayout from './components/common/ThreeLayout';
import RadioBoxGroup from "./components/common/RadioBoxGroup/test";
// import Select from "./components/common/Select/test";

export default class App extends Component{
  render(){
    return (
      // <div className="app-container" style={{
      //   height: 300
      // }}>
      //   <ThreeLayout leftWidth={200} rightWidth={200} left={<div>左边</div>} right={<div>右边</div>}>
      //     <div>居中</div>
      //   </ThreeLayout>
      // </div>
      <div>
        {/* <Test /> */}
        <RadioBoxGroup />
        {/* <Select /> */}
      </div>
    )
  }
}