import React, { Component } from "react";
// import Test from './components/common/CheckBox/test';
// import ThreeLayout from './components/common/ThreeLayout';
// import RadioBoxGroup from "./components/common/RadioBoxGroup/test";
import Select from "./components/common/Select/test";

// HOC组件测试
// import withLog from "./components/HOC/withLog"; // 给组件添加了 日志记录 的功能
// import Comp from './components/HOC/Comp';
// import withLogin from './components/HOC/withLogin'; // 给组件添加了 登录验证 的功能


export default class App extends Component{
  state = {
    isLogin: true
  }
  render(){

    // const A = withLog(Comp)
    // const B = withLog(Comp)
    // const C = withLogin(Comp)
    // const D = withLogin(Comp)
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
        {/* <RadioBoxGroup /> */}
        <Select />
        {/* <A txt="A组件"></A>
        <B txt="B组件"/>
        <C isLogin={this.state.isLogin} txt="登录状态显示组件"/>
        <D isLogin={this.state.isLogin} txt="未登录不显示组件"/>
        <button onClick={() => this.setState({isLogin: !this.state.isLogin})} type="button">切换登录状态</button> */}
      </div>
    )
  }
}