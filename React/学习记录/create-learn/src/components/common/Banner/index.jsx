import React, { Component } from 'react'
import './css/index.css';
import PropTypes from 'prop-types';
import ImageComp from './ImageComp/index';
import AngleMark from './AngleMark';

export default class Banner extends Component {
 static propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  imgUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  duration: PropTypes.number,
  changeTime: PropTypes.number,
 }
 state = {
  width: this.props.width,
  height: this.props.height,
  imgUrls: this.props.imgUrls,
  index: 0,
  duration: this.props.duration || 16,
  changeTime: this.props.changeTime || 2000
 }
 timer = null;
 count = 0;

 imgRef = (el) => {
  this.imgContainer = el;
 }

 move = () => {
  if(this.flag){
   return;
  }

  this.imgContainer.move(this.state.index, () => this.flag = false)
 }

 changeIndex = (index) => {
  const len = this.state.imgUrls.length - 1;
  if(index < 0){
   index = len;
  }
  if(index > len){
   index = 0;
  }
  this.setState({
   index
  }, () => {
   this.move(this.state.index)
   this.flag = true
  })
 }
  render() {
    return (
       <div className='banner-container' style={{
       height: this.state.height,
       width: this.state.width
      }}>
       <ImageComp ref={this.imgRef} 
       imgUrls={this.state.imgUrls} 
       imgWidth={this.state.width} 
       imgHeight={this.state.height}
       duration={this.state.duration}
       changeTime={this.state.changeTime}
       />
       
       <AngleMark icon="<" styles={{
        borderRadius: "0px 15px 15px 0px"
       }} move={() => {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.changeIndex(--this.state.index)
       }}/>
       <AngleMark icon=">" styles={{
        right: 0,
        borderRadius: "15px 0px 0px 15px"
       }} move={() => {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.changeIndex(++this.state.index)
       }}/>
      </div>
    )
  }
}
