import React from 'react'
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom'
import qs from 'query-string'
function A(props){
  const navigate = useNavigate()
  const params = useParams() // params 中提供了 v5 中 match 的数据
  const location = useLocation()
  return (
    <div>
      <div>组件A</div>
      <button onClick={() => {

        navigate('/b/2022/4/29', {state: '参数', replace: true})
        // console.log('b', params, location, qs.parse(location.search))
        // props.history.push("/b") v5老版本写法
        // props.history.replace('/b','状态数据')
        // console.log(props.match)
      }}>go B</button>
    </div>
  )
}

function B(props){
  const navigate = useNavigate()
  const params = useParams()
  const location = useLocation()
  return (
    <div>
      <div>组件B</div>
      <button onClick={() => {
        navigate('/', {'参数': 2})
        console.log('A',params, location)
      }}>go A</button>
      <div>日期：{params.year}/{params.month}/{params.day}</div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<A/>}></Route>
      <Route path="/b/:year(\d+)/:month(\d+)/:day(\d+)" element={<B />}></Route>
      {/* <Route path='/' element={<div>App</div>}></Route> */}
    </Routes>
  )
}
