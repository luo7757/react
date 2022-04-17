import React, { PureComponent } from 'react'

export default class MouseListener extends PureComponent {
  state = {
    x: 0,
    y: 0,
    boxStyle: null
  }

  divRef = React.createRef()

  getMousePosition = (e) => {
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
          {`x:${this.state.x}, y:${this.state.y}`}
      </div>
    )
  }
}
