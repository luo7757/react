import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

export default function App() {
  
  // console.log(useParams())
  // 问题 实现动态路由配置
  // User组件 的匹配路径是 /user 但如果规则变化，此时地址栏匹配是 /n 匹配不到子组件
  // 子组件 以 /user 开头， /n 明显会出问题
  // 想要子组件的 匹配地址 跟随父级的匹配路径动态修改

  //  /user/* 匹配 /user 开头的路由

  // v5 版本中 路由组件 props属性中的match.url获取当前组件下 匹配通过的组件的 path 值
  // 显示 test 组件 props.match.url 值为 test
  // 那么子组件 直接传递一个 参数 过去就可以了
  
  // 在 v6 中 推荐写一个配置文件
  // 这个配置文件也可以动态处理 这里直接写死了

  return (
    <Routes>
      {/* <Route path="/n/*" element={<User />}></Route> */}
      <Route path={`/${routerConfig.user.root}/*`} element={<User />}></Route>
      {/* <Route path='/test/*' element={<Test />}></Route> */}
    </Routes>
  )
}
function User(){
  return (
    <div>
      <h1>User组件固定的区域</h1>
      <Link to={`/${routerConfig.user.root}/${routerConfig.user.edit}`}>修改用户信息</Link>
      <Link to={`/${routerConfig.user.root}/${routerConfig.user.pay}`}>充值</Link>
      <div style={{
        height: 300,
        width: 300,
        backgroundColor: '#bfa',
        marginTop: 20
      }}>
        <Routes>
          {/* 在 v6 版本中 子组件会自动处理前缀 省去了/user， 在v5 版本中 需要这样写 /user/edit  */}
          <Route path={`/${routerConfig.user.edit}`} element={<EditUser />}></Route>
          <Route path={`/${routerConfig.user.pay}`} element={<UserPay />}></Route>
        </Routes>
      </div>
    </div>
  )
}

function EditUser(){
  return (
    <div>修改用户信息</div>
  )
}

function UserPay(){
  return (
    <div>用户充值</div>
  )
}

function Test(){
  return (
    <div>Test</div>
  )
}

const routerConfig = {
  // 这里的匹配只是简单写了一下，如果由children等情况，可以写一个辅助函数，动态生成配置
  user: {
    root: 'user',
    pay: 'pay',
    edit: 'edit'
  }
}