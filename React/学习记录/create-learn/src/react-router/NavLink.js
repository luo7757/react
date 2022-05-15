import React from 'react';
import ctx from './RouterContext';
import Link from './Link';
import { parsePath } from 'history';
import pathMatch from './pathMatch';
import './css/NavLink.css'

export default function NavLink(props) {
  const {
    activeClass = "navLink-active",
    exact = false,
    strict = false,
    sensitive = false,
    ...rest 
  } = props;

  return (
    <ctx.Consumer>
      {({location}) => {
        const result = pathMatch(props.to, location.pathname, {exact,strict,sensitive})
        console.log(result)
        if(!result || !result.isExact){
          return (
            <Link {...rest}></Link>
          )
        } else {
          return (
            <Link {...rest} activeClass={activeClass}></Link>
          )
        }
      }}
    </ctx.Consumer>
  )
}


