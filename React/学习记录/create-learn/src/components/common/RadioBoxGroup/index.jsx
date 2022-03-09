import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Types from '../../utils/commonTypes.js';

export default class RadioBoxGroup extends Component {
  static propTypes = {
    datas: Types.grounpDatas,
    onClick: PropTypes.func,
    name: PropTypes.string,
    choose: PropTypes.string,
  }

  createdDOM = () => {
    console.log(this.props)
    return this.props.datas.map(it => <label key={it.value}>
      <input onChange={this.props.onClick} 
      name={this.props.name}
      checked={this.props.choose === it.value}
      type="radio"
      value={it.value}
      />
      {it.text}
    </label>)
  }

  render() {
    const dom = this.createdDOM();
    // console.log(dom)
    return (
      <div>{dom}</div>
    )
  }
}
