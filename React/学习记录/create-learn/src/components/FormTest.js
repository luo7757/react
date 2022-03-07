import React, { Component } from 'react'

export default class FormTest extends Component {
  state = {
    loginId:"",
    loginPwd:"",
    sex:"male",
    chooseLoves: ["football","basetball","movie","other"],
    loves:[
      {value: 'football', text:"足球"},
      {value: 'basetball', text:"蓝球"},
      {value: 'movie', text:"电影"},
      {value: 'music', text:"音乐"},
      {value: 'other', text:"其他"}
    ],
    city:"-1"
  }
  userHandle(e){
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  }
  changeLove(e){
    console.log('執行')
    let arr = new Set([...this.state.chooseLoves]);
    let value = e.target.value;
    console.log(this.state.chooseLoves.includes(value))
    if(this.state.chooseLoves.includes(value)){
      arr.delete(value);
    }else{
      arr.add(value);
    }
    console.log(arr)
    this.setState({
      chooseLoves: [...arr]
    })
  }
  getUserInfo = () => {
    console.log(this.state)
  }
  render() {
    const lovesEle = this.state.loves.map(it => 
      <label key={it.value}>{it.text}<input type="checkbox" value={it.value} name={it.value} 
      onChange={(e) => this.changeLove(e)} checked={this.state.chooseLoves.includes(it.value)} /></label>
    )
    return (
      <form className='formTest'>
        <div>
          <label name="loginId">用户名: </label>
          <input name="loginId" type="text" value={this.state.loginId} 
          onChange={(e) => this.userHandle(e)}/>
        </div>
        <div>
          <label name="loginPwd">密码: </label>
          <input type="password" name="loginPwd" value={this.state.loginPwd} 
          onChange={(e) => this.userHandle(e)}/>
        </div>
        <div>
          <label name="sex">性别: </label>
          男:<input type="radio" name='sex' value="male" 
          onChange={(e) => this.userHandle(e)} checked={this.state.sex === 'male'}/>

          女:<input type="radio" name="sex" value="famale" 
          onChange={(e) => this.userHandle(e)} checked={this.state.sex === 'famale'}/>
        </div>
        <div>
          <label>兴趣: </label>
          {lovesEle}
        </div>
        <div>
          <label>城市:</label>
          <select value={this.state.city} name="city" onChange={(e) => this.userHandle(e)}>
            <option value="-1">请选择</option>
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
            <option value="tianjin">天津</option>
            <option value="chongqing">重庆</option>
          </select>
        </div>
        <button type='button' onClick={this.getUserInfo}>获得全部数据</button>
      </form>
    )
  }
}
