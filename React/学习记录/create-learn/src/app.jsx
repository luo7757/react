import React, {  } from "react";
import "./app.css";
import { NavLink, Switch, Route } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import CssTransitionGroup from './components/Transition/TransitionGroup'

export default function app() {
  return (
    <div className="app-container">
      <ul className="menu">
        <li>
          <NavLink to="/home">首页</NavLink>
        </li>
        <li>
          <NavLink to="/news">新闻页</NavLink>
        </li>
        <li>
          <NavLink to="/admin">个人中心</NavLink>
        </li>
      </ul>
      <div className="app-content">
        <CssTransitionGroup  path="/home" exact component={<Home />}/>
        <CssTransitionGroup  path="/news" exact component={<News />}/>
        <CssTransitionGroup  path="/admin" exact component={<Admin />}/>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div style={{
      backgroundColor: "red",
      height:300,
      display:"flex",
      justifyContent: "center",
      alignItems: "center", 
      position:"absolute",
      width:400
    }}>
      <h1>首页</h1>
    </div>
  );
}

function News(){
  return (
    <div style={{
      backgroundColor: "yellow",
      height:300,
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      position:"absolute",
      width:400
    }}>
      <h1>新闻页</h1>
    </div>
  );
}

function Admin(){
  return (
    <div style={{
      backgroundColor: "pink",
      height:300,
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      position:"absolute",
      width:400
    }}>
      <h1>个人中心</h1>
    </div>
  );
}