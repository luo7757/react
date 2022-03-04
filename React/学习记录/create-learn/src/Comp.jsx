import React, { Component } from "react";

export class Comp extends Component{
  state = {
    n : 0,
  }
  constructor(props){
    super(props)
    setInterval(() => {
      this.setState({n: this.state.n + 1})
      this.setState({n: this.state.n + 1})
      this.setState({n: this.state.n + 1})
    }, 1000)
    // 这里就是同步的操作 运行了三次render 状态修改也是同步的
  }
  handleClick = () => {
    // this.setState({
    //   n: this.state.n + 1
    // })
    // 在逻辑上来说 this.setState 在改变状态时，内部会调用render函数
    // 那么这里就该是先修改完状态  在运行render，再运行 n
    // 但现在是运行n后 再运行render 说明此时setState是异步的
    // 为了方便，我们始终认为其实异步的
    // 可以这样做 setState 接收第二个参数 一个函数 这个函数会在状态修改结束后 运行
    // this.setState({n: this.state.n + 1}, () => {
    //   console.log(this.state.n);
    // })



    // this.setState({
    //   n: this.state.n + 1
    // })
    // this.setState({
    //   n: this.state.n + 1
    // })
    // this.setState({
    //   n: this.state.n + 1
    // })
    // 注意这里的函数里面的 n 是同步获取的 在一步修改之前 n状态没有改变
    // 后面的 n 都是一样的



    this.setState(cur => {
      // 在这种写法中 第一个参数使用函数
      // 函数里面的参数是可信的 如果有同步需要调用多次 可以采用下面的方法
      // 如果后续有多次修改状态，那么react会维护一个队列 将后续的状态修改 加入队列中
      // 每次状态修改完后，都会将修改完的状态作为队列中下一个函数的参数
      // 那么每一次状态修改都是可信的 在队列的函数运行完毕后 在运行render函数
      return {
        n: cur.n + 1
      }
    },() => {
      // 这个函数会在所有状态修改完成后再运行
      console.log(this.state.n)
    })
    this.setState(cur => {
      return {
        n: cur.n + 1
      }
    })
    this.setState(cur => {
      return {
        n: cur.n + 1
      }
    })
    console.log(this.state.n);
  }
  render(){
    console.log('render');
    return (
      <div>
        <span>{this.state.n}</span>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}