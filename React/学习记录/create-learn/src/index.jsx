import React from 'react';
import ReactDOM from 'react-dom';

let num = 1;
// const div = (
//   <div title='wc'>
//     {num}
//   </div>
// )
setInterval(() => {
  num ++;
  const div = (
    <div>{num}</div>
  )
  // 注意这里并没有 生产一个真正的don元素
  // 生成的是一个 jsx 虚拟dom对象
  // 在react中 对于 jsx 虚拟dom发生改变时，react 会仅修改在 虚拟dom树中对应的元素的 数据
  // 真实的dom 并不一定会删除重新创建 可能只是操作该真实dom 修改对应的属性
  ReactDOM.render(div,document.getElementById('root'));
},1000)
// jsx元素 一旦生成就不可变了 所有的信息都不可变
// console.log(div)
// div.props.children = 2;
// div.props.title = "测试"
// 要变就只能重新生成一个元素 来重新渲染
// 使用 Object.freeze() 来冻结 jsx 对象

// ReactDOM.render(div,document.getElementById('root'));