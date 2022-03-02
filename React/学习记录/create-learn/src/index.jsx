import React from 'react';
import ReactDOM from 'react-dom';

// 有时需求必须要有两个根节点 一般是加一个div作为根节点
// 但有时还不能有真实元素作为根节点 可以使用一个空的节点<></> ,这是一个语法糖 ，真实的写法是下面那种 如下
// React.Fragment 代表一个片段 在虚拟dom中表示为symbel
const h1 = (
  <>
    <h1>Hello, World</h1>
    <span>一个span元素</span>
  </>
)
console.log(h1);
// const h1 = (
//   <React.Fragment> 
//     <h1>Hello, World</h1>
//     <span>一个span元素</span>
//   </React.Fragment>
// )

ReactDOM.render(h1,
  document.getElementById('root')
);
