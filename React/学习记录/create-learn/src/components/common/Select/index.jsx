import React, { Component } from 'react'
import Types from '../../utils/commonTypes.js';
import withDataGroup from '../../HOC/withDatasGroup.jsx';

class Option extends Component {
  static propTypes = {
    info: Types.info.isRequired,
  }

  render() {
    return (
      <option value={this.props.info.value}>{this.props.info.text}</option>
    )
  }
}

class Select extends Component{
  static defaultProps = {
    datas: [],
  }
  static propTypes = {
    onChange: Types.func.isRequired,
    datas: Types.grounpDatas.isRequired,
    choose: Types.choose.isRequired,
  }
  render(){
    const Options = withDataGroup(Option);
    return (
      <select value={this.props.choose} onChange={this.props.onChange}>
        <Options {...this.props}/>
      </select>
    )
  }
}

export default Select;
