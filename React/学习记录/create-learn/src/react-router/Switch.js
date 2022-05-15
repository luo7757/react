import React, { PureComponent } from 'react';
import ctx from './RouterContext';
import pathMatch from './pathMatch';
import { Route } from './index'

// 本组件默认精确匹配 因为只会渲染一个组件

export default class Switch extends PureComponent {

  screenChildren = ({location}) => {
    // 统一格式, 只要有数据就返回一个数组 
    const children = this.formatChildren();
    // switch 下只能是 Route 组件 在react元素对象中，相关的属性，其中就有type属性指明了其来自哪里
    if(!children){
      return null;
    }

    for (const key of children) {
      if(key.type !== Route){
        throw new Error('this children of Switch is must be Route Component')
      }
    }

    for (const key of children) {
      const Match = pathMatch(location.pathname, key.props.path || "/", {...key.props})
      if(Match && Match.isExact){
        return key;
      }
    }
    return null;
  }

  formatChildren = () => {
    if(!this.props.children){
      return null;
    }
    return [this.props.children].flat(1);
  }

  render() {

    return (
      <ctx.Consumer>
        {this.screenChildren}
      </ctx.Consumer>
    )
  }
}
