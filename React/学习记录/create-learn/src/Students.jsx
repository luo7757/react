import React, { Component } from "react";
import { Student } from './Student';

export class Students extends Component{
  render(){
    console.log(this.props)
    const StudetnsArr = this.props.list.map(it => <li key={it.id}><Student {...it}/></li>)
    return (<ul>
      { StudetnsArr }
    </ul>)
  }
}