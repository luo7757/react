import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./assets/css/reset.css";
import { BrowserRouter as Router } from "react-router-dom";
import 'animate.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
