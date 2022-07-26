import { Link, Outlet } from "umi";

export default function index () {
  return (
    <div>
      sub主页测试用
      <Link to="a">A</Link>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}