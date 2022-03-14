import React, { Component } from "react";
// import Test from './components/common/CheckBoxGroup/test';
// import ThreeLayout from './components/common/ThreeLayout';
// import RadioBoxGroup from "./components/common/RadioBoxGroup/test";
// import Select from "./components/common/Select/test";

// HOC组件测试
import withLog from "./components/HOC/withLog"; // 给组件添加了 日志记录 的功能
import Comp from './components/HOC/Comp';
import withLogin from './components/HOC/withLogin'; // 给组件添加了 登录验证 的功能


export default class App extends Component{
  state = {
    isLogin: true
  }
  ARef = React.createRef(); // 创建一个 ref 对象

  componentDidMount(){
    console.log()
  }

  render(){

    const A = withLog(Comp)
    const B = withLog(Comp)
    const C = withLogin(Comp)
    const D = withLogin(Comp)
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
        {/* <Select /> */}
        {/* 高阶组件的装饰后的组件 我么绑定ref会绑定到高阶组件身上这不是我们想要的效果，我们需要绑定的是组件自身 */}
        {/* 那么在高阶组件中 使用 ref 转发 使其ref绑定到组件身上 注意 使用(el) => this.xxx的方式绑定ref会失效*/}
        <A txt="A组件" ref={this.ARef}></A> 
        <B txt="B组件"/>
        <C isLogin={this.state.isLogin} txt="登录状态显示组件"/>
        <D isLogin={this.state.isLogin} txt="未登录不显示组件"/>
        <button onClick={() => this.setState({isLogin: !this.state.isLogin})} type="button">切换登录状态</button>
      </div>
    )
  }
}