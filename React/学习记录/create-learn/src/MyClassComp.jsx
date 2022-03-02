import React, { Component } from 'react';

export class MyClassComp extends Component {
  /**
   * 该方法必须返回一个 jsx 对象
   */
  constructor(props){
    // 使用继承时 必须使用super 并将参数传递给父类
    super(props);
    // this.props = props;
    console.log(this.props);
    // 这里这样写会报错  eslint 认为 这样写没必要 继承会自动完成super 如果自己写 就要写super 还有其他操作
    // 如果没有其他操作 就不要写 constructor
    // 
  }
  /**
   * 必须返回一个 react 元素
   * @returns 
   */
  render(){
    return <div>类组件的内容:{this.props.number}</div>    
  }
}