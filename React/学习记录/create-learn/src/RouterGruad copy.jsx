// 一个路由守卫组件

/* 这个组件 作为根路由组件， 添加阻塞，
后续route匹配都需要通过 getUserConfirmation 进行判断
 
 */
import React, { Component, PureComponent } from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'


let from, to, action, unBlock;

class _GruadHlper extends Component{
  componentDidMount() {
    // 添加阻塞
    unBlock = this.props.history.block((newLocation, ac) => {
      // 阻塞 流程图 
      //  页面1 => 阻塞 => 页面2
      // 此时 阻塞函数 获得参数 this.props.location 都是当前页面的对应参数

      // 这个函数返回一个字符串 或者返回 bool  即控制跳转
      // 但不能在这里控制跳转 具体实现 应由外部实现
      // return true;
      // 保存路由参数出去

      // console.log(this.props.location)
      // 跳转之前的参数

      // 想要跳转组件 location 参数
      from = this.props.location;
      to = newLocation;
      action = ac;
      return ""
      // 返回字符串 具体实现交由外部实现
    });

    this.unListen = this.props.history.listen((newLocation, action) => {
      // 这个方法只有在 成功跳转之后才会运行  所以如果需要做守卫都是在 block 阶段中进行

      
      // listen 方法运行在 地址栏变化之前 ，可以获取之前的地址 返回一个函数 可以用于取消监听
      // console.log(this.props.location) 此时由于运行时间点在地址栏变化之前，获取的数据就是变化之前的地址
      // newLocation 是地址栏变化之后获取的新的地址栏参数
      // 类似于 vue-route 中的 to 和 from
      // console.log(this.props.location, newLocation)
      // 此时获取的参数就是 之前 和 当前的location  
      if (this.props.onChange) {
        const to = this.props.location;
        this.props.onChange(from, to, action, this.unListen);
      }
    })
  }

  componentWillUnmount(){
    this.unListen();
    unBlock();
    // 组件销毁 其实如果作为整个页面的 根路由，这个销毁了就是页面没了
    // 当然保存下来 可以提供给必要的时候进行销毁，虽然不知道什么情况会销毁
  }

  render(){
    // 这个组件不参与渲染 只是为了获取 上下文 并添加阻塞
    return null;
  }
}

const GruadHlper = withRouter(_GruadHlper)

class RouterGruad extends PureComponent {
  // 在这个组件中添加 阻塞，那么就要获取上下文， 但上下文由 路由根组件 提供
  // 本组件处于路由根组件之上， 使用一个空组件，获取上下文，并保存出来即可

  handleConfirm = (msg, commit) => {
    // 在这里进行守卫处理 决定是否跳转 
    // 如需控制是否跳转 需要参数：location、match、action、阻塞返回函数、callback
    // 
    if(this.props.onBeforeChange){
      // 传递了控制函数 为该控制函数提供全部参数
      this.props.onBeforeChange({from, to, action, commit, unBlock})
    }else{
      commit(true)
    }
  }

  render() {
    return (
      <Router getUserConfirmation={this.handleConfirm}>
        <GruadHlper onChange={this.props.onChange} />
        {this.props.children}
      </Router>
    )
  }
}


export default RouterGruad