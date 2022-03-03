import React from "react";

/**
 * 根据当前的page和size去请求数据
 * 
 * @param {number} page 
 * @param {number} size 
 */
 export function Students(props){
  //  console.log(props)
   const studentArr = props.students.map(it => <div key={it.id}>
     <span>姓名：{it.name}</span>
     <span>性别：{it.sex ? "女" : "男"}</span>
     <span>电话：{it.phone}</span>
     <span>出生年：{it.birth}</span>
     <span>邮箱：{it.email}</span>
   </div>)
  return studentArr
}

