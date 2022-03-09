import React, { Component } from 'react'
import RadioBoxGorup from './index';
import { getStudents } from '../../getData';

export default class test extends Component {
  state = {
    datas: [],
    choose: ""
  }

  async componentDidMount(){
    const result = await getStudents();
    this.setState({
      datas: result.map(it => ({ value: it.id.toString(), text: it.name }))
    })
  }

  getChoose = (e) => {
    console.log(e.target.value)
    this.setState({
      choose: e.target.value
    })
  }

  render() {
    return (
      <RadioBoxGorup 
      datas={this.state.datas} 
      onClick={this.getChoose}
      name="name"
      choose={this.state.choose}
      />
    )
  }
}
