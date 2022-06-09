import React, { PureComponent } from "react";
import { Provider, connect } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
import store from './Redux/index'
import Main from './components/Main'

export default class App extends PureComponent{

  render() {
    return (
      // <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      // </Provider>
    )
  }
}

