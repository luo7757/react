import React, { Component, PureComponent } from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

let from, to, action, unBlock;

class _GruadHlper extends Component{
  componentDidMount() {
    unBlock = this.props.history.block((newLocation, ac) => {
      from = this.props.location;
      to = newLocation;
      action = ac;
      return ""
    });

    this.unListen = this.props.history.listen((newLocation, action) => {
      if (this.props.onChange) {
        const to = this.props.location;
        this.props.onChange(from, to, action, this.unListen);
      }
    })
  }

  componentWillUnmount(){
    this.unListen();
    unBlock();
  }

  render(){
    return null;
  }
}

const GruadHlper = withRouter(_GruadHlper)

class RouterGruad extends PureComponent {
  handleConfirm = (msg, commit) => {
    if(this.props.onBeforeChange){
      this.props.onBeforeChange({from, to, action, commit, unBlock})
    }else{
      commit(true)
    }
  }

  render() {
    return (
      <Router getUserConfirmation={this.handleConfirm}>
        <GruadHlper onChange={this.props.onChange} />
        {this.props.children}
      </Router>
    )
  }
}

export default RouterGruad