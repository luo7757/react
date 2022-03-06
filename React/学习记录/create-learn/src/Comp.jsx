import React from 'react'

export default function Comp(props){
  return (
    <div className='comp'>
      {props.div}
      {props.children}
    </div>
  )
}