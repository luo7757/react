import React, { Component } from "react";

export default class AddTask extends Component {
  state = {
    name: "",
  };

  AddTask = () => {
    this.props.AddTask({
      name: this.state.name,
      isFinish: Math.random() > 0.5,
    });
    this.setState({
      name: "",
    });
  };

  render() {
    console.log("addTask render");
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) =>
            this.setState({
              name: e.target.value,
            })
          }
        />
        <button
          type="button"
          onClick={this.AddTask}
        >
          添加任务
        </button>
      </div>
    );
  }
}
