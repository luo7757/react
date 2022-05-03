import React from "react";
import { Link, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Link to="/user">进入User</Link>
      <Route path="/user" component={User}></Route>
    </div>
  );
}

function User(props){
  // 这个时候的问题就是  子路由的路径由父级的 路由路径决定 
  // 一旦父级路由 user 更换名字 子路由全部匹配不上
  // 所有我们需要一个动态路由
  // 方案一： 在V5中好使 使用mtach对象
  // 方案二： 使用全局RouteConfig 配置，即所有path都来自于config中，都好使

  // v5 下面使用match

  // v6 使用 config

  console.log(props.match)
  return (
    <div>
       <ul>
        <li>
          <Link to={`${props.match.path}/edit`}>修改用户信息</Link>
        </li>
        <li>
          <Link to={`${props.match.path}/pay`}>用户充值</Link>
        </li>
      </ul>
      <div style={{
        width: 300,
        height: 300,
        backgroundColor: "#bfa"
      }}>
        <Switch>
          <Route path={`${props.match.path}/edit`} component={Edit}></Route>
          <Route path={`${props.match.path}/pay`} component={Pay}></Route>
        </Switch>
      </div>
    </div>
  )
}

function Pay(){
  return (
    <div>用户充值</div>
  )
}


function Edit(props){
  return (
    <div>
      <p>用户信息修改</p>
      <Link to={`${props.match.path}/name`}>我的名字</Link>
      <Link to={`${props.match.path}/sex`}>我的性别</Link>
      <Switch>
        <Route path={`${props.match.path}/name`} component={Name}></Route>
        <Route path={`${props.match.path}/sex`} component={Sex}></Route>
      </Switch>
    </div>
  )
}


function Name(){
  return (
    <div>王</div>
  )
}

function Sex(){
  return (
    <div>男</div>
  )
}

