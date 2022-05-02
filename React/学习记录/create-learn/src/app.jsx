import React, { useEffect } from "react";
import {
  Link,
  Routes,
  Route,
  useNavigate,
  useLocation,
  useSearchParams,
  useRoutes,
} from "react-router-dom";

export default function App() {
  // 一些页面是需要权限的，在用户没有权限的时候不能进入该页面
  // 可以封装一个权限鉴定组件 ，该组件在鉴定后，转向失败或成功的对应界面
  const elements = useRoutes(routes);
  return elements;
}

function H() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/login">登录</Link>
        </li>
        <li>
          <Link to="/admin">个人中心</Link>
        </li>
      </ul>
      <div>
        <AuthRoute path="/" element={<Home></Home>} />
        <AuthRoute path="/login" element={<Login></Login>} />
        <AuthRoute path="/admin" element={<Admin></Admin>} />
      </div>
    </div>
  );
}

function AuthRoute({path, element:Element, children, ...options}){
  if(user.isLogin){
    return (
      <Routes>
        <Route path={path} element={Element} />
      </Routes>
      )
  }else{
    return (
      // <Redirect to="/login" />
      <div>login</div>
    )
  }
}

function Redirect({to}){
  const navigate = useNavigate()
  useEffect(() => {
    navigate(to)
  })
  return null;
}

const routes = [
  {
    path: "/",
    element: <H />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
];

const user = {
  isLogin: false,
  login: () => {
    this.isLogin = !this.isLogin;
  },
  loginOut: () => {
    this.isLogin = !this.isLogin;
  },
};

function AppraisalRoute({ path, element: Element, children, ...options }) {
  const navigate = useNavigate();
  if (user.isLogin) {
    // 已经的登录 返回进入登录页之前的页面
    return navigate("./");
  } else {
    // 未登录 转进登录页 携带pathname，方便再次转回触发登录的页面
    return <div></div>;
  }
}

function Home() {
  return (
    <div>
      <h1>首页</h1>
      <p>任何用户都可以看见</p>
    </div>
  );
}
function Login() {
  return (
    <div>
      <h1>登录</h1>
      <p>未登录，请用户登录</p>
    </div>
  );
}

function Admin() {
  return (
    <div>
      <h1>个人中心</h1>
      <p>看见此页面，说明用户已经登录</p>
    </div>
  );
}
