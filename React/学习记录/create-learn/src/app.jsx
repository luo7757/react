import React from "react";
import { Link, Route } from "react-router-dom"
import pathMatch from "./react-router/pathMatch";
export default function App() {
  return (
    <div>
      <h1>App</h1>
      <Link to="/test/123">Test</Link>
      <div>
        <Route path="/test/:id/:name?" exact component={Test}></Route>
        {/* 这个路由的 自定义params参数 ： id ， 可选参数：name  */}
      </div>
    </div>
  );
}

function Test({match}) {
  console.log(match)
  console.log(pathMatch(match.path, match.url))
  return <div>Test组件</div>;
}
