import React, { Component } from "react";
import PropTypes from "prop-types";
import Types from "../../utils/commonTypes.js";
import withDataGroup from "../../HOC/withDatasGroup.jsx";

class RadioBox extends Component {
  static propTypes = {
    onClick: Types.func,
    name: PropTypes.string,
    choose: PropTypes.string,
    info: Types.info.isRequired,
  };

  render() {
    return (
      <label>
        <input
          onChange={this.props.onClick}
          name={this.props.name}
          checked={this.props.choose === this.props.info.value}
          type="radio"
          value={this.props.info.value}
        />
        {this.props.info.text}
      </label>
    );
  }
}

export default withDataGroup(RadioBox);
