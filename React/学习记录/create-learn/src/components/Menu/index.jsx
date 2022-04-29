import React from 'react'
import { Link } from 'react-router-dom'
export default function Menu() {
  return (
      <ul>
        <li>
          <Link to="/student">学生列表</Link>
        </li>
        <li>
          <Link to="/student/add">添加学生</Link>
        </li>
        <li>
          <Link to="/course">课程列表</Link>
        </li>
        <li>
          <Link to="/course/add">添加课程</Link>
        </li>
      </ul>
  )
}
