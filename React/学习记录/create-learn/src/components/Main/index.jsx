import React from 'react'
import { Routes, Route } from 'react-router'
import Student from '../Students/Student'

export default function Main() {
  return (
    <Routes>
      <Route path="/student" element={
        <>
          <Student/>
        </>
      }/>
      <Route path="/student/add" element={<div>添加学生</div>}/>
      <Route path="/course" element={<div>课程列表</div>}/>
      <Route path="/course/add" element={<div>添加课程</div>}/>
      <Route index element={<div>mian</div>}/>
    </Routes>
  )
}
