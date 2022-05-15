import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./assets/css/reset.css";
import "animate.css";
import { BrowserRouter } from "./react-router-dom";
import { Route, Switch, withRouter, Link, NavLink } from "./react-router";

const Comp = withRouter(comp)

function comp(props){
  return <div>comp组件</div>
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/abc" exact component={Abc}></Route>
      <Route path="/home" exact component={Home}></Route>
      <Route render={(value) => Change(value)}></Route>
    </Switch>
    <Comp />
    <ul>
      <li>
        <Link to="/abc">去Abc</Link>
      </li>
      <li>
        <Link to={{
          pathname: "/home"
        }}><span>去HOME</span></Link>
      </li>
    </ul>
    <ul>
      <li>
        <NavLink to="/abc">去abc</NavLink>
      </li>
      <li>
        <NavLink to="/home"><span>去HOME</span></NavLink>
      </li>
    </ul>
  </BrowserRouter>,
  document.getElementById("root")
);

function Abc(){
  return <div>/abc Component</div>
}

function Home(){
  return <div>/ Component</div>
}

function Change({ history }) {
  return (
    <div>
      <button
        onClick={() => {
          history.push("/abc");
        }}
      >
        去abc
      </button>
      <button onClick={() => {
        history.push("/home")
      }}>去home</button>
    </div>
  );
}
