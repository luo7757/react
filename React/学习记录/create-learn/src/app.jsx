import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function ChildA (){
  // return (
  //   <div className='child-a'>
  //     ChildA
  //     <ChildB />
  //   </div>
  // )
  return ReactDOM.createPortal(<div className='child-a'>
    ChildA
    <ChildB />
  </div>, document.querySelector('.modal'))
}

function ChildB () {
  return (
    <div className='child-b'>ChildB</div>
  )
}

export default class app extends Component {
  render() {
    return (
      <div>
        <ChildA></ChildA>
      </div> 
    )
  }
}
