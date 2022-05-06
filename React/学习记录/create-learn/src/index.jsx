import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./assets/css/reset.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'animate.css';

ReactDOM.render(
  <Router>
    <Route path="/" component={App}></Route>
  </Router>,
  document.getElementById("root")
);
