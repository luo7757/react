import React, { Component } from 'react';
import Types from '../utils/commonTypes';

export default function withDataGroup(Comp){
 // 传递一个组件 和 数据 ，循环渲染
 return class DataGroupWrapper extends Component{
  static defaultProps = {
   datas: []
  }
  static propTypes = {
   datas: Types.grounpDatas
  }

  render(){
   // 完成单个组件元素的遍历
   const Comps = this.props.datas.map(it => <Comp key={it.value} info={it} {...this.props}></Comp>)
   return (
    <>
     {Comps}
    </>
   )
  }
 }
}