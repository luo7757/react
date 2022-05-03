import React from 'react'
import { BrowserRouter as Router, Switch, Link,  Route } from 'react-router-dom'
 
export default function App(props) {
  return (
    <Router getUserConfirmation={(msg,callBack) => {
      console.log(msg)
      callBack(true)
    }}>
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
    </Router>
  )
}


function Home(){
  return (
    <h1>Home</h1>
  )
}

function Page1(props){
  // console.log(props.history.block, '1')
  props.history.block('阻塞')
  // 使用阻塞后，所有route组件是否成功渲染 取决于 根路由的getUserConfirmation的callback 返回值
  // callBack(bool) 
  return (
    <h1>Page1</h1>
  )
}

function Page2(){
  return (
    <h1>Page2</h1>
  )
}
