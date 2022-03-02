import React from "react";
import ReactDOM from 'react-dom';

import { MyFuncComp } from './MyFuncComp';
import { MyClassComp } from './MyClassComp';

let dom = document.getElementById('root');

// 传递的属性 可以是任何数据
ReactDOM.render(<div>
  <MyFuncComp number={6}/>
  <MyFuncComp number="4"/>
  <MyClassComp number="5"/>
  <MyClassComp ennabel ui={<h2>这是一个h2 react元素</h2>}/>
  <MyClassComp obj={{name: "派大星", age: 30}}/>
</div>, dom)