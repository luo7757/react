import PropTypes from 'prop-types'
import React from 'react'
import './index.css'

Layout.propsTypes = {
  title: PropTypes.element,
  menu: PropTypes.element,
  main: PropTypes.element
}

export default function Layout(props) {
  return (
    <div className='layout-container'>
      <div className='layout-title'>
        {props.title}
      </div>
      <div className='layout-header'>
        <div className='layout-menu'>
          {props.menu}
        </div>
        <div className='layout-main'>
          {props.main}
        </div>
      </div>
    </div>
  )
}
