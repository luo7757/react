import React, { PureComponent } from 'react';
import ctx from './RouterContext';
import pathMatch from './pathMatch';
import PropTypes from 'prop-types'

// 这个组件用于决定 传递的组件在一定条件下是否显示
export default class Route extends PureComponent {
  static propTypes = {
    path: PropTypes.string,
    exact: PropTypes.bool,
    sensitive: PropTypes.bool,
    strict: PropTypes.bool,
    children: PropTypes.func,
    component: PropTypes.func,
    render: PropTypes.func
  }

  static defaultProps = {
    exact: false,
    sensitive: false,
    strict: false,
  }

  matchRoute(location){
    // 匹配 信息， 其中location， history 不变，是全局的
    // match 是当前组件的 匹配关键信息
    // Match 通过当前地址栏的pathname，对比使用此组件时传递的path属性，做对比
    const { exact = false, strict = false, sensitive = false } = this.props;
    return pathMatch(this.props.path || "/", location.pathname, {
        exact,
        strict,
        sensitive
    })
  }

  consumerFunc = (value) => {
    this.unBlock = value.history.block("阻塞")
    const ctxValue = {
      location : value.location,
      history : value.history,
      match : this.matchRoute(value.location)
    }
    // 匹配出信息后 由renderChildren 函数 决定渲染内容
    return (
      <ctx.Provider value={ctxValue}>
        {this.renderChildren(ctxValue)}
      </ctx.Provider>
    )
  } 

  renderChildren = (ctx) => {
    // 传递children，无论是否匹配都要渲染
    if(this.props.children !== undefined && this.props.children !== null){
      if(typeof this.props.children === "function"){
        return this.props.children(ctx);
      }else{
        return this.props.children;
      }
    }
    // 没有传递children
    if(!ctx.match){
      // 没有匹配
      return null;
    }else {
      // 匹配了 但是是精确匹配
      if(this.props.exact && ctx.match.isExact){
        // 渲染选择
        return this.renderOrComponent(ctx)
      }else{
        // 不是精确匹配
        return this.renderOrComponent(ctx)
      }
    }
  }

  renderOrComponent = (ctx) => {
    if(typeof this.props.render === "function"){
      return this.props.render(ctx);
    }else if(this.props.component){
      const Component = this.props.component;
      return <Component {...ctx}/>;
    }
    // 没有传递可以渲染元素
    return null;
  }

  render() {
    return (
      <ctx.Consumer>
        {this.consumerFunc}
      </ctx.Consumer>
    )
  }
}
