import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./assets/css/reset.css";
import "animate.css";
import { BrowserRouter } from "./react-router-dom";
import { Route, Switch } from "./react-router";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/abc" exact component={Abc}></Route>
      <Route path="/home" exact component={Home}></Route>
      <Route render={(value) => Change(value)}></Route>
    </Switch>
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
