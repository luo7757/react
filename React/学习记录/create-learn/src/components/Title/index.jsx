import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
export default function Title() {
  return (
    <div className='title'>
      <div className='title-logo'>title-logo</div>
      <div className=''>
        <Link to="/login">用户</Link>
      </div>
    </div>
  )
}
