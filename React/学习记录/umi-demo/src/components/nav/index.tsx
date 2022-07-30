import styles from './index.less';
import { NavLink } from 'umi';
export default function Nav(props:any){
  return (
    <div className={styles.container}>
      <div>后台管理首页</div>
      <ul>
        <li><NavLink to="/students">查询学生</NavLink></li>
        <li><NavLink to="/addStudent">添加学生</NavLink></li>
      </ul>
    </div>
  )
}