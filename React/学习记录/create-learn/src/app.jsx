import React, { Component } from "react";
import CheckBoxGroup from "./component/common/CheckBoxGroup";
import { getStudents } from "./component/getData";

// import ThreeLayout from './component/common/ThreeLayout';

export default class App extends Component{
  state = {
    students: []
  }

  async componentDidMount(){
    const data = await getStudents();
    console.log(data)
    this.setState({
      students: data
    })
  }

  render(){
    return (
      // <div className="app-container" style={{
      //   height: 300
      // }}>
      //   <ThreeLayout leftWidth={200} rightWidth={200} left={<div>左边</div>} right={<div>右边</div>}>
      //     <div>居中</div>
      //   </ThreeLayout>
      // </div>
      <div>
        <CheckBoxGroup data={this.state.students}></CheckBoxGroup>
      </div>
    )
  }
}