import React from 'react';
import ReactDOM from 'react-dom';

// 表达式
const a = 1234,
      b = 4312;
const obj = (<span>React元素对象</span>)
// const obj = {
//   a:1,
//   b:2
// }
// const arr = [1,2,3,4,5];
const arr = (new Array(30)).fill(0).map((it,i) => <span key={i}>{i}</span>);
// arr.fill(<span>一个span元素</span>);
const div = (
  <div>
    {a} * {b} = {a * b}
    <p>
      {null}
      {undefined}
      {false}
      {true}
      {0}
      {/* 一个注释，不会输出 */}
    </p>
    <p>
      {/* {obj}  */}
      {/* jsx中不能出现一个普通对象, react元素对象可以*/}
      {obj}
    </p>
    <p>
      {/* 数组可以放，将数组中每一个元素，作为子元素加进来 */}
      {arr}
    </p>
  </div>
)
// 上面的 null undefined false true 在页面中都不会显示
// const div = React.createElement('div', {}, `${a} * ${b} = ${a * b}`)

ReactDOM.render(div,document.getElementById('root'));