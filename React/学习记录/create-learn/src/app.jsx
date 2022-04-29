import React from 'react'
import Layout from './components/Layout'
import Title from './components/Title'
import Menu from './components/Menu'
import Main from './components/Main'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom' 


export default function app() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Layout 
          title={<Title />} 
          menu={<Menu />}
          main={<Main />}
          ></Layout>} />
        <Route path="/login" element={<Login />}/>
      </Routes>
          
    </div>
  )
}
