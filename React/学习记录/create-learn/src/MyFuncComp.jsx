import React from "react";

export function MyFuncComp(props){
  // props 采用剩余参数的方式 形成一个对象
  console.log(props)
  return <h1>组件内容：{props.number}</h1>
 }