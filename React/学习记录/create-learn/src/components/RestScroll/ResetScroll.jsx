import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'
/**
 * ref 重置scroll的元素对象
 * component 组件
 */

export default function ResetScroll(props){
  const { dom, component: Component, ...rest } = props; 
  dom.current.scrollTop = 0;
  return (
    <Route {...rest} component={Component}></Route>
  )
}
