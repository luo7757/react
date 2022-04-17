import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import "./task.css";
import { isEqual } from '../utils/isEqual.js';

// export default class Task extends Component {
//   static propTypes = {
//     isFinish: PropTypes.bool,
//     name: PropTypes.string,
//   };

//   shouldComponentUpdate(nextProps, nextState){
//     // 控制不必要的重新渲染
//     // 默认直接返回 true
//     // 两个参数 nextProps nextState
//     // 两个对象判断 props 和 state
//     // 判断两个对象 是否相等 相等就不要重新渲染了
//     if(isEqual(this.props, nextProps) && isEqual(this.state, nextState)){
//       return false;
//     }
//     return true;
//   }

//   render() {
//     console.log("task render");
//     return (
//       <li className={this.props.info.isFinish ? "finish" : "pool"}>
//         {this.props.info.name}
//       </li>
//     );
//   }
// }

// react 提供的pureComponent 和上面的功能一致 只要子组件继承自PureComponent 就可以了
// export default class Task extends PureComponent {
//   static propTypes = {
//     isFinish: PropTypes.bool,
//     name: PropTypes.string,
//   };

//   render() {
//     console.log("task render");
//     return (
//       <li className={this.props.info.isFinish ? "finish" : "pool"}>
//         {this.props.info.name}
//       </li>
//     );
//   }
// }

function Task(props){
  return (
    <li className={props.info.isFinish ? "finish" : "pool"}>
      {props.info.name}
    </li>
  )
}

function memo(funcComp){
  // 自封装 memo
  return class Memo extends PureComponent{
    render(){
      return (
        <>
          {funcComp(this.props)}
        </>
      )
    }
  }
}
// memo 创建一个纯组件 不会有状态的改变memo 高阶组件 继承自PureComponent
// 完成了 函数组件的 数据不变不重新渲染 
// export default React.memo(Task)

export default memo(Task)