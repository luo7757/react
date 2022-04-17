import React, { PureComponent } from 'react'

export default class WithMouseListener extends PureComponent {
  // 监听鼠标数据
  state = {
    x: 0,
    y: 0,
    boxStyle: null
  }

  divRef = React.createRef()

  componentDidMount(){
    const {top, left} = this.divRef.current.getBoundingClientRect();
    this.setState({
      boxStyle: {
        top, left
      }
    })
  }

  mouseListener = (e) => {
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
      x,y
    })
  }

  render() {
    return (
      <div onMouseMove={this.mouseListener} className='test' ref={this.divRef}>
        {/* {this.props.children(this.state)}   */}
        {this.props.render(this.state)}
      </div>
    )
  }
}
