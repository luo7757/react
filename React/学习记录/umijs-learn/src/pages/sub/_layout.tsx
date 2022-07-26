import { Outlet } from "umi";
export default function (props:any){
  return (
    <div>
      <h1>sub页面布局</h1>
      <Outlet />
    </div>
  )
}