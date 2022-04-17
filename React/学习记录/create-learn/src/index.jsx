import React from "react";
import ReactDOM from 'react-dom';
import App from './app';
// import Ref from './components/ref'

// ReactDOM.render(<Ref />,document.getElementById("root"))

ReactDOM.render(<App />,document.getElementById("root"))

document.querySelector('#root').addEventListener('click', () => {
  console.log('最终事件触发')
})