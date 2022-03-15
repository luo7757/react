import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import ctx from '../FormContext/index';

export default class FormInput extends Component {
 // static propTypes = {

 // }
 // static contextType = ctx;
  render() {
   console.log(this.props)
   const obj = this.props.datas[this.props.info];
    return (
      <label htmlFor={this.props.info} name={this.props.info}>
       <span>{obj.name}</span>
       <input value={obj.value || ""} type={obj.type} id={this.props.info} onChange={(e) => this.props.chang(this.props.info, e.target.value)}/>
      </label>
    )
  }
}
