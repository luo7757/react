import React, { Component } from 'react';
// import OldContextApi from './components/oldContextApi';
import NewContext from './components/NewContext';
export default class app extends Component {
  render() {
    return (
      <div>
        {/* <OldContextApi /> */}
        <NewContext />
      </div>
    )
  }
}
