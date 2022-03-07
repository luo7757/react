import React from "react";
import './index.css';

/**
 * 
 * @param {number} minMainWidth 最小宽度
 * @param {ReactDOM} main 居中元素
 * @param {ReactDOM} left 左边元素
 * @param {ReactDOM} right 右边元素
 * @param {number} leftWidth 左边宽度
 * @param {number} rightWidth 右边宽度
 * @returns 
 */
export default function ThreeLayout(props){
  const defaultOptions = {
    minMainWidth: 800,
    leftWidth: 200,
    rightWidth: 200,
  }
  let options = Object.assign({}, defaultOptions, props)
  return (
  <div className="threeLayout-container">
    <div className="threeLayout-main" style={{
      width: options.main && options.minMainWidth
    }}>
      {options.main || options.children}
    </div>
    <div className="threeLayout-left" style={{
      width: options.left && options.leftWidth
    }}>
      {options.left}
    </div>
    <div className="threeLayout-right" style={{
      width: options.right && options.rightWidth
    }}>
      {options.right}
    </div>
  </div>
  )
}