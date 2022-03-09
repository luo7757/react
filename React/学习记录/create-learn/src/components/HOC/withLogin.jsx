import React, { Component } from 'react'

export default function widthLogin(Comp){
  return class LoginWrapper extends Component {
    render() {
      if(this.props.isLogin){
        return (
          <div>{this.props.txt}</div>
        ) 
      }
      return null;
    }
  }
}
