import React, { Component } from 'react'
import Select from './index'
import { getStudents } from '../../getData'

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
    this.setState({
      choose: e.target.value
    })
    console.log(e.target.value)
  }

  render() {
    return (
      <Select datas={this.state.datas} onChange={(e) => this.getChoose(e)}/>
    )
  }
}
