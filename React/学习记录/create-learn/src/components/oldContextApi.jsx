import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class oldContextApi extends Component {
 static childContextTypes = {
  a: PropTypes.number,
  b: PropTypes.string.isRequired
 }
 /**
  * 在合适的时候运行函数
  * @returns 上下文对象
  */
 getChildContext(){
  console.log('创建上下文');
  return {
   a: 123,
   b: "上下文"
  }
 }
 
 render() {
    return (
      <div>
       <ChildA />
       <ChildB />
      </div>
    )
  }
}

class ChildA extends Component {
  render() {
    return (
      <div>ChildA</div>
    )
  }
}
class ChildB extends Component {
 render() {
   return (
     <div>
      ChildB
      <ChildC />
     </div>
   )
 }
}
class ChildC extends Component {
 /**
  * 声明需要使用哪些上下文中的数据
  */
 static contextTypes = {
  a: PropTypes.number
  // 为什么要在子组件中再次声明context呢，是为了包装数据的来源正确性
 }

 // constructor(props, context){
 //  super(props);
 //  console.log(context)
 // }

 constructor(props, context){
  super(props, context);
  // 将上下文交给父类处理 成为实例对象中的属性
  console.log(this.context)
 }

 render() {
   return (
     <div>
      <p>ChildC,a属性：{this.context.a}</p>
      <ChildD />
     </div>
   )
 }
}

function ChildD(props, context){
 return (
  <div>ChildD，属性a: {context.a}</div>
 )
}
ChildD.contextTypes = {
 a: PropTypes.number
}