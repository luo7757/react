import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Types from '../../utils/commonTypes.js';
export default class Select extends Component {
  static propTypes = {
    datas: Types.grounpDatas,
    onChange: PropTypes.func
  }

  render() {
    const arr = this.props.datas.map(it => <option key={it.value} value={it.value}>{it.text}</option>)
    return (
      <select onChange={this.props.onChange}>
        {arr}
      </select>
    )
  }
}
