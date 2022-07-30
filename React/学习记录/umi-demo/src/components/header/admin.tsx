import { connect } from 'umi';
import styles from './admin.less';
import { history } from 'umi';

function Admin(props:any){
  return (
    <div className={styles.container}>
      <span>欢迎你</span>
      <span>{props.id}</span>
      <button type='button' onClick={() => {
        props.loginOut();
        history.replace("/")
      }}>退出登录</button>
    </div>
  )
}

const mapStateToProps = (state:any) => ({
  id: state.userInfo.id
})

const mapDispatchToProps = (dispatch:Function) => ({
  loginOut(){
    dispatch({
      type:"userInfo/removeUserInfo"
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)