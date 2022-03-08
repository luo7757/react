import React, { Component } from 'react'
import PropTypes from 'prop-types'; // 类型检查库

export default class VaildatationComp extends Component {
  // 先混合
  static defaultProps = {
    b: false,
    e: <div>React元素</div>,
    d: "node节点"
  }
  // 再验证
  static propTypes = {
    a: PropTypes.number.isRequired, // a属性为数字，必填
    b: PropTypes.bool.isRequired, // 布尔值，必填
    onClick: PropTypes.func, // 函数
    c: PropTypes.any, // 任意类型
    d: PropTypes.node, // 可以被渲染的元素 unll undefined 是认为没有传递 在React中 null undefained是不可渲染的元素
    e: PropTypes.element, // React元素 
    f: PropTypes.elementType, // 组件类型 这个地方需要注意 传递的必须是一个组件对象 使用方法也不能通过 {xx} 来使用 先创建一个变量接收 再使用 <xx/>的方式来使用
    g: PropTypes.shape({ // 对对象内部的属性进行约束
      name: PropTypes.string,
      age: PropTypes.number
    })
  }

  render() {
    const F = this.props.f 
    return (
      <div>
        {this.props.a}
        {this.props.b}
        {this.props.d}
        {this.props.e}
        <F />
      </div>
    )
  }
}
