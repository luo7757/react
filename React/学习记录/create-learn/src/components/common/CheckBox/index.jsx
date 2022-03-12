import React, { Component } from "react";
import Types from "../../utils/commonTypes.js";
import withDataGroup from "../../HOC/withCheckBoxGroup.jsx";

class CheckBox extends Component {
  // 关注与单个组件的创建
  // 一个checkbox需要的数据 info{value，text}
  // onchange 事件
  // 类型定义
  static propTypes = {
    info: Types.info.isRequired,
    onChange: Types.func.isRequired,
    chooseDatas: Types.chooseDatas,
  };

  handleChange = (e) => {
    let newArr;
    if (e.target.checked) {
      newArr = [...this.props.chooseDatas, e.target.value];
    } else {
      newArr = this.props.chooseDatas.filter((it) => it !== e.target.value);
    }
    this.props.onChange && this.props.onChange(newArr);
  };

  render() {
    return (
      <label>
        <input
          type="checkbox"
          value={this.props.info.value}
          checked={this.props.chooseDatas.includes(this.props.info.value)}
          onChange={this.handleChange}
        />
        {this.props.info.text}
      </label>
    );
  }
}


export default withDataGroup(CheckBox)