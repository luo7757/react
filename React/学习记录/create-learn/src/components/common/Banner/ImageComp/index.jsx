import React, { Component } from "react";

export default class ImageComp extends Component {
  state = {
    len: this.props.imgUrls.length
  }
  createDOM(){
   const arr = [...this.props.imgUrls, this.props.imgUrls[0]]
   return arr.map((it, i) => <img key={`${i}`} style={{
    height: this.props.imgHeight,
    width: this.props.imgWidth,
   }} src={it} alt="图片" />)
  }

  setRef = (el) => {
   this.imgContainer = el;
  }
  timer = null;
  move = (index) => {
    // 运动总次数
    const total = Math.ceil(this.props.changeTime / this.props.duration);
    // 当前left值 
    const currentLeft = parseFloat(window.getComputedStyle(this.imgContainer).marginLeft);
    // 目标left值
    const targetLeft = this.props.imgWidth * -index;
    // 每次运动距离
    const moveLength = (targetLeft - currentLeft) / total;
    // 当前运动次数
    let count = 0;
    this.timer = setInterval(() => {
      ++count;
      if(count === total){
        clearInterval(this.timer);
        this.timer = null;
        this.imgContainer.style.marginLeft = `${targetLeft}px`;
        count = 0;
        return;
      }
      this.imgContainer.style.marginLeft = `${currentLeft + count * moveLength}px`;
    }, this.props.duration);
  }

  render() {
   const imgArr = this.createDOM();
    return <div ref={this.setRef} style={{
     width: this.props.imgWidth * imgArr.length,
     height: this.props.imgHeight,
    }}>
     {imgArr}
    </div>;
  }
}
