import React from "react";
import ReactDOM from 'react-dom';
import { Tick } from './component/Tick';

const div = (
  <div>
    <Tick number={20}/>
  </div>
)

ReactDOM.render(div, document.getElementById("root"));