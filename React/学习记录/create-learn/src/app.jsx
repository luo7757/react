import React from 'react'
import { Switch, Link,  Route } from 'react-router-dom'
import RouterGruad from './RouterGruad'

export default function App(props) {

  return (
    <RouterGruad onBeforeChange={(props) => {
      // 跳转之前运行
      // 这里提供的全部参数 和 控制权
      // 如何判断 是否跳转 组件使用者 进行控制
      if(props.to.pathname === "/page1"){
        props.commit(false)
      }else{
        props.commit(true)
      }
    }}
    onChange={(props) => {
      // 跳转完成 运行
    }}
    >
       <Link to='/page1'>page1</Link>
       <Link to='/page2'>page2</Link>
       <Link to="/">Home</Link>
       <div>
         <Switch>
           <Route path="/" exact component={Home}></Route>
           <Route path="/page1" exact component={Page1}></Route>
           <Route path="/page2" exact component={Page2}></Route>
         </Switch>
       </div>
    </RouterGruad>
  )
  // return (
  //   <Router getUserConfirmation={(msg,callBack) => {
  //     console.log(msg)
  //     callBack(true)
  //   }}>
  //     <Link to='/page1'>page1</Link>
  //     <Link to='/page2'>page2</Link>
  //     <Link to="/">Home</Link>
  //     <div>
  //       <Switch>
  //         <Route path="/" exact component={Home}></Route>
  //         <Route path="/page1" exact component={Page1}></Route>
  //         <Route path="/page2" exact component={Page2}></Route>
  //       </Switch>
  //     </div>
  //   </Router>
  // )
}


function Home(){
  return (
    <h1>Home</h1>
  )
}

function Page1(props){
  return (
    <h1>Page1</h1>
  )
}

function Page2(){
  return (
    <h1>Page2</h1>
  )
}
