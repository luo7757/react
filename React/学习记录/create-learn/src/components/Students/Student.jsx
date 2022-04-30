import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { findStudents } from '../api/students.js'
import SearchBar from './search.jsx'
import qs from 'query-string'
import StudentsList from './StudentsList'
import Pager from '../common/Pager/index'
function useResp(query){
  // 这个函数用于获取数据 及 创建依赖项
  // 依赖地址栏参数 地址栏参数变化重新获取数据
  const [resp, setResp] = useState({
    count: 0,
    data: []
  })

  useEffect(() => {
    // console.log('运行')
    findStudents({
      search: query.search, 
      sex: query.sex, 
      page: query.page, 
      szie: query.size
    }).then(res => {
      setResp({
        ...res
      })
    })
  }, [query.search, query.sex, query.page, query.size])
  // 创建一个依赖项，依赖项来自于参数 当参数发生变化时，运行 effect 函数
  return resp;
}

function useLocationDate(){
  // 获取当前location search参数
  // const search = useLocation().search
  // console.log(qs.parse(search))

  return qs.parse(useLocation().search)
}

function getQuery(search){
  // 获取数据 完成参数处理
  const defaultOptions = {
    page: 1,
    size: 10,
    sex: -1,
    search: ''
  }
  const options = Object.assign({}, defaultOptions, search)
  options.page = +options.page
  options.size = +options.size
  options.sex = +options.sex
  return options;
}
function changeLocation(query, navigator){
  // 处理地址栏显示
  if(!query.search){
    navigator(`/student?${qs.stringify({page: query.page, size: query.szie})}`, {replace: true})
  }else{
    navigator(`/student?${qs.stringify(query)}`, {replace: true})
  }
}

export default function StudentList () {
  const navigate = useNavigate()
  const query = getQuery(useLocationDate())
  const data = useResp(query)
  console.log(data)
  // SearchBar 运行回调函数 意味修改location
  return (
    <div>
      <div>
        <SearchBar 
        defaultValue={{
          search: query.search,
          sex: query.sex
        }}
        onSearch={(search) => {
          // 根据选中参数 再次修改 location
          const newQuery = {
            ...query,
            ...search,
            page: 1
          }
          changeLocation(newQuery, navigate)
        }}/>
      </div>
      <div>
        <StudentsList data={data.data}/>
      </div>
    </div>
  )
  
}
