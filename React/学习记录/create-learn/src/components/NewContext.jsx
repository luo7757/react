import React, { Component } from 'react'

// const ctx = React.createContext({
//  a: 0,
//  b: 'abc'
// }); 
// 方法一

// 方法二
// 创建一个上下文对象
const ctx = React.createContext();
const ctx1 = React.createContext();

function ChildA(props){
 // 函数组件 没有 this.context
 return (
  <div>ChildA
   <div>
    {/* <ctx.Consumer>
     {value => {
      return (
       <div>
        <h2>数据：a:{value.a} ,b: {value.b}</h2>
       </div>
      )
     }}
    </ctx.Consumer> */}
    <ctx.Consumer children={value => {
     return (
      <div>
       <h2>数据:a:{value.a} ,b:{value.b}</h2>
      </div>
     )
    }}>
 
    </ctx.Consumer>
   </div>
   <ChildB />
  </div>
 )
}

class ChildB extends Component{
 // 使用 contextTypes 获取上下文对象 在这个组件的 构造函数中就有了context 参数 自动变为实例中的 context 属性
 static contextType = ctx;

 render(){
  return (
   <div>
    <p>ChildB,来自于上下问的数据：a:{this.context.a}, b:{this.context.b}</p>
    <ctx.Consumer children={value => {
     return (
      <div>
       <h2>类组件中使用Consumer，数据 a: {value.a}, b:{value.b}</h2>
       <ctx1.Provider value={{
        c: 1233,
        d: 'wocao'
       }}>
        <ctx1.Consumer>
         {val => <h3>另一个数据来源，数据c:{val.c},数据d：{val.d},数据a:{value.a},数据b:{value.b}</h3>}
        </ctx1.Consumer>
       </ctx1.Provider>
      </div>
     )
    }}></ctx.Consumer>
    <button type='button' onClick={() => this.context.onChangeA(100)}>ChildA 改变NewContext组件的属性</button>
   </div>
  )
 }
}

export default class NewContext extends Component {
 state = {
  a: 0,
  b: 'abc',
  onChangeA: (newA) => {
   this.setState({
    a: newA
   })
  }
 }
  render() {
   const Provider = ctx.Provider;
   // 创建一个上下文组件 其中value代表上下文对象
   console.log(Provider)
    return (
     // 方法一
     // <Provider value={ctx}>
     //  <div>NewContext</div>
     // </Provider>
     //两种属性表达式

     // 方法二
     // 上下文组件的 value属性的值 就是上下文对象的值
     <ctx.Provider value={this.state}>
      <div>NewContext</div>
      <button type='button' onClick={() => this.setState({
       a: 10
      })}>改变context数据</button>
      <ChildA />
     </ctx.Provider>
    )
  }
}
