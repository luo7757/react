import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./assets/css/reset.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import 'animate.css';
import { BrowserRouter } from "./react-router-dom"

// window.h = createBrowserHistory({
//   baseNmae: '/news',
//   keyLength: 4,
//   forceRefresh: true,
//   getUserConfirmation: (msg, prev, next, callback) => {
//     console.log(prev, next)
//     callback(window.confirm(msg))
//   }
// })
// window.h.listen((location, action) => {
//   console.log('函数1地址变化了参数', location,action)
// })

// window.h.block((prev, next) => {
//   return "阻塞了"
// })



console.log(window.h)
ReactDOM.render(
  <BrowserRouter>
    Dawwdwad
  </BrowserRouter>,
  document.getElementById("root")
);
