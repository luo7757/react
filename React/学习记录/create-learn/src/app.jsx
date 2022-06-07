import React, { PureComponent } from "react";
import { Provider, connect } from "react-redux";
import { countAction } from "./redux-saga/action";


import store from './Redux/index'

const hoc = connect(mapStateToProps, mapDispatchToProps)


export default function app() {
  // return (
  //   <div>
  //     <div>app</div>
  //     <CounterContainer store={store} Component={Test} />
  //   </div>
  // );
  const Comp = hoc(Test)
  return (
    <Provider store={store}>
      <div>app</div>
      <Comp />
    </Provider>
  )
}

function Test(props) {
  // 渲染组件 提供界面
  return (
    <div>
      <div>数据:{props.number}</div>
      <div>
        <button onClick={props.onIncrease}>加</button>
        <button onClick={props.onDecrease}>减</button>
        <button onClick={props.onAsyncIncrease}>异步加</button>
        <button onClick={props.onAsyncDecrease}>异步减</button>
      </div>
    </div>
  )
}


function mapStateToProps (state) {
  // state 整个仓库的状态 这个函数用于筛选数据
  return {
    number: state
  }
}

function mapDispatchToProps (dispatch) {
  // 传递一个函数 有两个参数 参数一 dispatch函数，参数二：传递给组件的属性
  return {
    onIncrease(...arg){
      dispatch(countAction.increase(...arg))
    },
    onDecrease(...arg){
      dispatch(countAction.decrease(...arg))
    },
    onAsyncIncrease(...arg){
      dispatch(countAction.asyncIncrease(...arg))
    },
    onAsyncDecrease(...arg){
      dispatch(countAction.asyncDecrease(...arg))
    }
  }
}

class CounterContainer extends PureComponent{
  // 容器组件 提供数据
  constructor(props){
    super(props)
    this.state = mapStateToProps(props.store.getState())
    this.dispatch = mapDispatchToProps(props.store.dispatch)
    props.store.subscribe(() => {
      this.setState({
        ...mapStateToProps(props.store)
      })
    })
  }

  render(){
    const Comp = this.props.Component;
    return (
      <Comp {... mapDispatchToProps(this.props.store, this.setState)} {...this.state} />
    )
  }
}