import React from "react";

export function Student(props){
  return (<div>
    名字：{props.name}
    年龄：{props.age}
    电话：{props.phone}
    邮箱：{props.email}
  </div>)
  
}