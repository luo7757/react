import React from "react";
import './index.css';
import Types from '../../utils/commonTypes.js';
import PropTypes from 'prop-types';


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
  return (
  <div className="threeLayout-container">
    <div className="threeLayout-main" style={{
      width: props.main && props.minMainWidth
    }}>
      {props.main || props.children}
    </div>
    <div className="threeLayout-left" style={{
      width: props.left && props.leftWidth
    }}>
      {props.left}
    </div>
    <div className="threeLayout-right" style={{
      width: props.right && props.rightWidth
    }}>
      {props.right}
    </div>
  </div>
  )
}
// 函数默认值
ThreeLayout.defaultOptions = {
  minMainWidth: 800,
  leftWidth: 200,
  rightWidth: 200,
}
// 函数属性约束

ThreeLayout.propTypes = {
  minMainWidth: PropTypes.number,
  leftWidth: PropTypes.number,
  rightWidth: PropTypes.number,
  main: Types.children,
  children: Types.children,
}
