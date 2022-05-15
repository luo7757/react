import React from 'react';
import ctx from './RouterContext';

// 使用上下文，使children 获得history对象

export default function WithRouter (Comp) {
  if(typeof Comp !== "function"){
    throw new Error('withRouter requires a function as an argument')
  }

  function RouterWrapper(props){
    return <ctx.Consumer>
      { value => <Comp {...value} {...props}/> }
    </ctx.Consumer>
  }

  RouterWrapper.displayName = `withRouter(${Comp.displayName || Comp.name})`

  return RouterWrapper;
}

