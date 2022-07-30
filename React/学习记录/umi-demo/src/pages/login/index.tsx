import styles from './index.less';
import { createRef } from 'react';
import { connect, history } from 'umi'; 

function Login(props:any) {
  const userId = createRef<HTMLInputElement>(),
        userPwd = createRef<HTMLInputElement>();
  return (
    <div className="center">
      <form className={styles.loginForm}>
        <div className={styles.userId}>
          <label htmlFor="userId">用户名</label>
          <input ref={userId} type="text" id='userId' />
        </div>
        <div className={styles.userPwd}>
          <label htmlFor="userPwd">密码</label>
          <input ref={userPwd} type="password" id='userPwd' />
        </div>
        <div> 
          <button type='button' onClick={() => {
            const result = props.onLogin({
              id: userId.current?.value || "",
              pwd: userPwd.current?.value || ""
            })
          }}>确定</button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state:any) => ({
  userInfo: state.userInfo
})

const mapDispatchToProps = (dispatch:Function) => ({
  onLogin(user:Object) {
    dispatch({
      type: "userInfo/asyncGetUserInfo",
      payload: user
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)