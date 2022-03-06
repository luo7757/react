import React from 'react';
import './index.css';
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
  const defaultOptions = {
    bgColor: 'rgba(0,0,0,0.5)',
    content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
    contentColor: "#fff",
    closeContent:'关闭',
    show:true
  }
  const options = Object.assign({}, defaultOptions, props);

  if(options.show){
    // 显示
    return (
      <div className='mantle-container' onClick={(e) => {
        if(e.target.className === "mantle-content"){
          return;
        }
        props.bgClose && props.bgClose()
      }} style={{
        backgroundColor: options.bgColor
      }}>
        <div className='mantle-content' style={{
          backgroundColor: options.contentColor
        }}>
          <div className='mantle-info'>
            {
              options.content
            }
          </div>
          <div className='mantle-close' onClick={props.btnClose}>
          {
            options.closeContent
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