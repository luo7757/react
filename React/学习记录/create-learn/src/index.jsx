import React from "react";
import ReactDOM from 'react-dom';
// import App from './app-v6';
// import { BrowserRouter, Routes, Route } from "react-router-dom";


import { BrowserRouter } from "react-router-dom";
import App from './app-v5';

import './assets/css/reset.css'

// react-router v6 版本

// ReactDOM.render(<BrowserRouter>
//   <Routes>
//     <Route path="*" element={<App></App>}></Route>
//   </Routes>
// </BrowserRouter>,
// document.getElementById("root"))



// react-router v5 版本

ReactDOM.render(<BrowserRouter>
  <App />
</BrowserRouter>,
document.getElementById("root"))
