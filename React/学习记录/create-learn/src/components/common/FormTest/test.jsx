import React, { Component } from "react";
import Form from "./index";

/**
 * 使用Form组件
 * 参数 一个对象
 * {
 * loginId: {
      name: "账号",
      type: "text",
      value: "",
      vaildator:func
    },
    loginPwd: {
      name: "密码",
      type: "password",
      value: "",
      vaildator:func
    },
    ....
    getInfo(res){
     res = 用户输入数据
    }
 * }
 */
export default class test extends Component {
  state = {
    loginId: {
      name: "账号",
      type: "text",
      value: "",
      // vaildator:func
    },
    loginPwd: {
      name: "密码",
      type: "password",
      value: "",
    },
    getInfo: (res) => {
     console.log(res,'数据获取');
    }
  };
  render() {
    return <Form info={this.state}/>;
  }
}
