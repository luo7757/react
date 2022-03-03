import React, { Component } from "react";
import { Ball } from './Ball';
import { getRandom } from "./utils";

export class BallList extends Component{
  constructor(props){
    super(props);
    this.state = {
      ballInfo:[]
    }
    this.timer = setInterval(() => {
      let obj = {
        xSpeed: getRandom(5,10),
        ySpeed: getRandom(4,8),
        left: getRandom(0, document.documentElement.clientWidth - 100),
        top: getRandom(0, document.documentElement.clientHeight - 100),
        color: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`
      }
      this.setState({ ballInfo: [...this.state.ballInfo, obj] })
      if(this.state.ballInfo.length >= 5){
        clearInterval(this.timer);
      }
    }, 2000)
  }
  // mounted(){
  //   this.createdBall()
  // }
  // createdBall(){
  //   let obj = {
  //     xSpeed: getRandom(5,10),
  //     ySpeed: getRandom(4,8),
  //     left: getRandom(0, document.documentElement.clientWidth - 100),
  //     top: getRandom(0, document.documentElement.clientHeight - 100),
  //     color: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`
  //   }
  //   this.timer = setInterval(() => {
  //     this.setState({ ballInfo: [...this.ballInfo.push(obj)] })
  //     if(this.state.ballInfo.length >= 5){
  //       clearInterval(this.timer);
  //     }
  //   }, 2000)
  // }
  render(){
    const arr = this.state.ballInfo.map((it, i) => <Ball key={i} {...it}/>)
    return (
      <>
        {arr}
      </>
    )
  }
}