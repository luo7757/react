import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./assets/css/reset.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'animate.css';
import { createBrowserHistory } from "./react-router/history/index"

window.h = createBrowserHistory({
  baseNmae: '/news',
  keyLength: 4,
  forceRefresh: true,
  // getUserConfirmation: (msg, callback) => {

  // }
})
window.h.listen((location, action) => {
  console.log('函数1地址变化了参数', location,action)
})

window.h.block((prev, next) => {
  console.log(prev, next)
  return "阻塞了"
})

console.log(window.h)
ReactDOM.render(
  <Router>
    <Route path="/" component={App}></Route>
  </Router>,
  document.getElementById("root")
);
