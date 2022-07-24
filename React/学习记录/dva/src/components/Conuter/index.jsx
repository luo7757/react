import React, { createRef } from 'react';
import { connect } from 'dva';
// connect 高阶函数

function Counter(props) {
  const inputRef = createRef(); 
  return (
    <div>
      <h1>{props.number}</h1>
      <button onClick={props.onIncrease}>+</button>
      <button onClick={props.onDecrease}>-</button>
      <div>
        <input type="text"  ref={inputRef}/>
        <button onClick={() => {
          props.onAdd(inputRef.current.value)
        }}>确认</button>
      </div>
      <button onClick={props.onAsyncIncrease}>异步加</button>
      <button onClick={props.onAsyncDecrease}>异步减</button>
    </div>
  )
}

// state传递的是整个仓库对象，需要使用namespace来获取对应的数据
// 返回一个对象
const mapStateToProps = state => ({
  number: state.counter
})

// dispatch也需要使用namespace来获取到对应的函数
const mapDispatchToProps = dispatch => ({
  onIncrease: () => {
    dispatch({
      type: "counter/increase"
    })
  },
  onDecrease: () => {
    dispatch({
      type: 'counter/decrease'
    })
  },
  onAdd(payload){
    dispatch({
      type:"counter/add",
      payload
    })
  },
  onAsyncDecrease(){
    dispatch({
      type: 'counter/asyncDecrease'
    })
  },
  onAsyncIncrease(){
    dispatch({
      type: 'counter/asyncIncrease'
    })
  }
})
// dispatch 触发reudce的type值对应model中的属性名


export default connect(mapStateToProps, mapDispatchToProps)(Counter)