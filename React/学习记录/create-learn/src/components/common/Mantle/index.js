import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

/**
 * 控制 bg btn 两种方式
 * @param {function} bgClose 
 * @param {function} btnClose
 * bg 文本 颜色
 * @param {string} bgColor 
 * @param {string} contentColor 
 * content btn 内容
 * @param {any} content 
 * @param {any} closeContent
 * @returns 
 */
export default function Mantle(props){
  if(props.show){
    // 显示
    return (
      <div className='mantle-container' onClick={(e) => {
        if(e.target.className !== "mantle-container"){
          return;
        }
        props.bgClose && props.bgClose()
      }} style={{
        backgroundColor: props.bgColor
      }}>
        <div className='mantle-content' style={{
          backgroundColor: props.contentColor
        }}>
          <div className='mantle-info'>
            {
              props.content
            }
          </div>
          <div className='mantle-btnClose' onClick={() => props.btnClose && props.btnClose()}>
          {
            props.closeContent
          }
          </div>
        </div>
      </div>
    )
  }else{
    // 不显示
    return null;
  }
}

Mantle.defaultOptions = {
  bgColor: 'rgba(0,0,0,0.5)',
  content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
  contentColor: "#fff",
  closeContent:'关闭',
  show:true
}

Mantle.propTypes = {
  bgColor: PropTypes.string,
  content: PropTypes.node,
  contentColor: PropTypes.string,
  closeContent: PropTypes.node,
  show: PropTypes.bool
}