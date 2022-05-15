// 提供一个 Router 具体实现组件

import React, { PureComponent } from 'react'
import ctx from '../react-router/RouterContext'
import PropTypes from 'prop-types'
import pathMatch from '../react-router/pathMatch'

export default class Router extends PureComponent {
  static propTypes = {
    history : PropTypes.object.isRequired,
    children: PropTypes.node
  }

  state = {
    location: this.props.history.location
  }


  componentDidMount(){
    console.log(this.props.children[0])
    this.unListen = this.props.history.listen((location, action) => {
      this.props.history.action = action;
      this.setState({
        location
      })
    })
  }

  componentWillUnmount(){
    this.unListen()
  }

  render() {
    const ctxValue = {};
    ctxValue.history = this.props.history;
    ctxValue.location = this.state.location;
    ctxValue.match = pathMatch('/', this.state.location.pathname)
    return (
      <ctx.Provider value={ctxValue}>
        {this.props.children}
      </ctx.Provider>
    )
  }
}
