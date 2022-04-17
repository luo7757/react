import React, { PureComponent } from 'react'
// 下面两个组件没有使用 render props 和 hoc 的思想
// 大量重复的代码
import MouseListener from './MouseListener.js'
import MovablePanel from './MovablePanel.js'

// 采用 render props 和 hoc 后的组件 
import WithMouseListener from './WithMouseListener.js'
import RenderMouseListener from './RenderMouseListener.js'
import RenderMouseblePanel from './RenderMouseblePanel.js'

import HocWithMouseListener from './HocWithMouseListener.js'
import './style.css'

const renderPoint = mouse => <>x: {mouse.x}, y: {mouse.y}</>
const renderMovable = mouse => <div className='panel' style={{top: mouse.y, left: mouse.x}}></div>

const HocPoint = HocWithMouseListener(renderPoint)
const HocMovable = HocWithMouseListener(renderMovable)

export default class Test extends PureComponent {


  render() {
    return (
      <div>
        {/* <MouseListener /> */}
        {/* <MovablePanel /> */}


        {/* <WithMouseListener render={renderPoint}></WithMouseListener> */}
        {/* <WithMouseListener render={renderMovable}></WithMouseListener> */}
        {/* <WithMouseListener>
          {mouse => RenderMouseblePanel(mouse)}
        </WithMouseListener> 采用this.props.children 来注册组件 */}
        

        <HocPoint />
        <HocMovable />
      </div>
    )
  }
}
