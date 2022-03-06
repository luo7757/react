import React from "react";
import ReactDOM from 'react-dom';

class A {
  render(){
    return null;
  }
}
ReactDOM.render((<div>
  <A />
  <A />
  <A />
</div>))