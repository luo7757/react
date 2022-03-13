import React, { Component } from 'react';
import './index.css';

export default class angleMark extends Component {
  render() {
    return (
      <div onClick={() => {
       this.props.move();
      }} className='angleMark-container' style={{
       ...this.props.styles
      }}>{this.props.icon}</div>
    )
  }
}
