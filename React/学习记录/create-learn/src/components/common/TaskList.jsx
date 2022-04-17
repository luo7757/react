import React, { Component } from 'react';
import Task from './Task';
import AddTask from './AddTask';

export default class TaskList extends Component {
  state = {
   list: [],
  }

  componentDidMount(){
   const arr = [];
   for (let i = 0; i < 10; i++) {
    arr.push({
      name: `任务${i}`,
      isFinish: Math.random() > 0.5
    })
   }
   this.setState({
    list: arr
   })
  }

  add = (info) => {
    this.setState({
      list: [...this.state.list, info]
    })
  }

  render() {
    console.log('TaskList render')
    const list = this.state.list.map((it, i) => <Task key={i} info={it}></Task>)
    return (
      <div>
       <div>
        <AddTask AddTask={this.add}/>
       </div>
       <div>
       {list}
       </div>
      </div>
    )
  }
}
