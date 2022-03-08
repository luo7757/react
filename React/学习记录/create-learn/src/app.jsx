import React, { Component } from "react";
import FuncDefault from "./FuncDefault";
import VaildatationComp from "./VaildatationComp";

import Comp from './Comp';
export default class App extends Component{

  render(){
    return (
     <div>
       <FuncDefault />
       <VaildatationComp a={2} b={true} f={Comp}/>
     </div>
    )
  }
}