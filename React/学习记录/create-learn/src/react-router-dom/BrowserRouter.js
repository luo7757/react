import { Component } from "react";
import { createBrowserHistory } from "./history";
import { Router } from '../react-router'
// 提供history数据的组件
// 三个组件 hash/memory/browser 里面的 history 具体实现不同，但返回数据格式一致

// Router 根据 history 提供具体数据供用户操作

export default class BrowserRouter extends Component{
  history = createBrowserHistory(this.props)

  render(){
    return (
      <Router history={this.history}>
        {this.props.children}
      </Router>
    )
  }
}