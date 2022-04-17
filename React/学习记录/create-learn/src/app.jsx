import React, { Component } from 'react';

export default class app extends Component {

  componentDidMount(){
    const div = document.querySelector('.HTMLDiv');
    div.onclick = (e) => {
      console.log('真实dom HTMLDiv的事件,运行了')
    }
  }

  render() {
    let pre = null;
    return (
      <div onClick={(e) => {
        // console.log('div的事件，被阻止了')
        console.log(e, pre, pre === e)
      }}>
        <div className='HTMLDiv'>
          <button onClick={e => {
            pre = e;
            //e.persist();// 持久化对象 但好像在新版中 已经自动完成了持久化
            // 在异步中使用 e对象 也能正确获取属性
            // console.log('react元素事件，触发了')
            // console.log(e.isPropagationStopped())
            // e.stopPropagation()
            // // 在 react 中 事件参数 e 根本就不是真实的 事件参数e，是一个合成参数
            // // 它阻止的不是真实DOM的事件冒泡
            // console.log(e.isPropagationStopped())

            // console.log(e.nativeEvent);
            // // 得到真实的DOM元素对象
            console.log(e.type, "type")
            // e.nativeEvent.stopImmediatePropagation()
            setTimeout(() => {
              console.log(e.type, "异步获取属性")
            }, 0);
          }}>点击</button>
        </div>
      </div> 
    )
  }
}

document.querySelector('#root').onclick = function(e){
  console.log('真实的dom事件：id为root的div被点击了')
  // e.stopPropagation();
}