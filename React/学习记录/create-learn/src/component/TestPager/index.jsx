import React, { Component } from "react";
import { Students } from "../Student";
import { Page } from '../Page/index';
import './index.css';

// const appkey ="luoshiyan_1622205899022"
const appkey = "demo13_1545210570249";

export class Pager extends Component{
  constructor(props){
    super(props)
    this.state = {
      total: 100,
      limit: 10,
      current: 1,
      size: 5,
      students:[],
      // changePage: this.changePage.bind(this)
      changePage: this.changePage
    }
    this.getStudents()
  }
  /**
 * 
 * @param {number} page 
 * @param {object} props 
 * 在react中 事件由父级提供，子级获取后 调用即可
 */
  changePage = (current, props) => {
    // 1). 使用static的字段初始化器，添加的是静态成员
    // 2). 没有使用static的字段初始化器，添加的成员位于对象上
    // 3). 箭头函数在字段初始化器位置上，指向当前对象
    // 解决了 this指向的问题 指向实例
    // 保证可以访问实例中的setState方法
    if(current === props.current){
      return;
    }
    console.log("current",current)
    
    this.setState({current}, this.getStudents)
    console.log(this.state.current)
    // this.getStudents();
  }

  getStudents = async () => {
    // console.log("this想")
    const result = await fetch(`https://open.duyiedu.com/api/student/findByPage?appkey=${appkey}&page=${this.state.current}&size=${this.state.limit}`).then(res => res.json()).then(res => res.data);
    // console.log(result);
    this.setState({
      total: result.cont,
      students: result.findByPage
    })
  }

  render(){
    return (
      <div className="pagerContainer">
        <div className="students">
          <Students students={this.state.students} />
        </div>
        <div className="pager">
          <Page {...this.state}/>
        </div>
      </div>
    )
  }
}
