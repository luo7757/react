import Admin from './admin'
import styles from './index.less';

export default function Header(props:any){
  return (
    <div className={styles.container}>
      <div>欢迎使用学生管理系统</div>
      <div><Admin/></div>
    </div>
  )
}