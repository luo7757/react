import { PureComponent, useState, useEffect } from 'react';
import Loading from '@/components/Loding/index';
import { connect } from 'umi';
import Login from '@/pages/login';
import '@/global.css';
// 布局组件 在登录后通用
// login界面不通用
// 在此处进行是否登录判断

const Layouts = (props: any) => {
  if (props.userInfo === null) {
    useEffect(() => {
      props.getUserInfo()
    })
    return <Loading></Loading>;
  } else if (props.userInfo === false) {
    // 用户信息获取为空
    return <Login></Login>;
  }
  return <div>{props.children}</div>;
};


const mapStateToProps = (state:any) => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = (dispatch:Function) => ({
  getUserInfo(){
    dispatch({
      type: "userInfo/asyncCheckingUserInfo"
    })
  },
  setUserInfo(){
    dispatch({
      type: "userInfo/asyncGetUserInfo",
      payload: {id: "nihao", pwd: 123456}
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Layouts)
