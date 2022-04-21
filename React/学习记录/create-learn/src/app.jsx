import React, { Component, useState, useEffect } from 'react'
import { useAllStudents } from './components/myHooks/useStudents'
// 
export default function App () {
  const students = useAllStudents();
  console.log(students)
  return (
    <div>
    </div>
  )
}


