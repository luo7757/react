import React, { Component } from 'react';
// import Types from '../utils/commonTypes';
import { type } from '../utils/type'; 

export default function withDataGroup(Comp){
 // 传递一个组件 和 数据 ，循环渲染
 return class DataGroupWrapper extends Component{
  // static defaultProps = {
  //  datas: []
  // }
  // static propTypes = {
  //  datas: Types.grounpDatas
  // }

  render(){
   // 完成单个组件元素的遍历
   if(type(this.props.datas) === 'object'){
    const Comps = [];
    let i = 0;
    for (const it in this.props.datas) {
     Comps.push(<Comp key={i} info={it} {...this.props}></Comp>)
     ++i;
    }
    return (
     <>
      {Comps}
     </>
    )
   }else if(type(this.props.datas) === 'array'){
    const Comps = this.props.datas.map((it, i) => <Comp key={`-${i}`} info={it} {...this.props}></Comp>)
    return (
     <>
      {Comps}
     </>
    )
   }
  }
 }
}