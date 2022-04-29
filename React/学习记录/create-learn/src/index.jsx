import React from "react";
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/reset.css'

ReactDOM.render(<BrowserRouter>
  <Routes>
    <Route path="*" element={<App></App>}></Route>
  </Routes>
</BrowserRouter>,
document.getElementById("root"))
