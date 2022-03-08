import React from 'react';
export default function FuncDefault(props){
  return (
    <div>
      {props.a}
      {props.b}
      {props.c}
    </div>
  )
}
FuncDefault.defaultProps = {
  a: 1,
  b: 2,
  c: 3
}
