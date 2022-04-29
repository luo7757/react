import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
export default class app extends Component {
  render() {
    return (
      <Routes>
        <Route path="/a" element={<A />}></Route>
        <Route path='/b' element={<B />}></Route>
        <Route path='/c' element={<C />}></Route>
      </Routes>
    )
  }
}
function A(){
  return (
    <div>
      mian组件
    </div>
  )
}

function B(){
  return (
    <div>
      组件B
    </div>
  )
}

function C(){
  return (
    <div>
      组件C
    </div>
  )
}
