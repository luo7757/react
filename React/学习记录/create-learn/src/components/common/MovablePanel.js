import React, { Component } from 'react'

export default class MovablePanel extends Component {

  state = {
    x: 0,
    y: 0,
    boxStyle: null
  }

  divRef = React.createRef()

  getMousePosition = (e) => {
    // this.divRef.target
    let x = e.pageX - this.state.boxStyle.left;
    let y = e.pageY - this.state.boxStyle.top;

    if(x <= 0){
      x = 0;
    }
    if(x >= this.state.boxStyle.width){
      x = this.state.boxStyle.width;
    }

    if(y <= 0){
      y = 0;
    }
    if(y >= this.state.boxStyle.height){
      y = this.state.boxStyle.height;
    } 

    this.setState({
      x,
      y
    })
  }
  
  componentDidMount(){
    const { left, top } = this.divRef.current.getBoundingClientRect()
    this.setState({
      boxStyle: {
        left, top
      }
    })
  }

  render() {
    return (
      <div onMouseMove={this.getMousePosition} ref={this.divRef} className='test'>
        <div className="panel" style={{
          top: this.state.y,
          left: this.state.x
        }}>
        </div>
      </div>
    )
  }
}
