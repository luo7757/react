import { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import { withRouter, Route } from "react-router-dom";

// 这个组件
function CssTransitionGroup(props){
  const {component: Component, ...rest} = props;
  return (
    <Route {...rest}>
    {({match}) => {
        return (
          <CSSTransition in={match ? true : false}
          timeout={800}
          classNames={{
            enter: 'animate__animated animate__fast',
            enterActive: "animate__fadeInRight",
            exit: 'animate__animated animate__fast',
            exitActive: "animate__fadeOutLeft"
          }}
          mountOnEnter={true}
          unmountOnExit={true}
          >
              {Component}
          </CSSTransition>
        )
      }}
    </Route>
  ) 

}
export default CssTransitionGroup;
