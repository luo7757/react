import React from "react";
import ReactDOM from 'react-dom';

import Comp from './Comp';


ReactDOM.render(
//<Comp div={<div>卧槽</div>}/>, 
<Comp div={<div>props属性</div>}>
  <div>children属性</div>
</Comp>,
document.getElementById('root')
)