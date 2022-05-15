import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ctx from './RouterContext';
import { type } from '../components/utils/type'


// 返回一个a元素， 这个a元素具有跳转路由的功能
export default class Link extends PureComponent {

  static propTypes = {
    path: PropTypes.string || PropTypes.object,
  }
  /**
   * 
   * @param {object} path 
   */
  parsePath = (path, createHref) => {
    // 处理路径
    if(type(path) === "string"){
      return path;
    } else if(type(path) === "object"){
      return createHref(path)
    }
    throw new Error('The type of the path parameter must be a string or function')
  }

  renderA = (value) => {
    // 根据传递的 to 属性 生成完整的 pathname+search+hash 的路径
    const { history , location } = value;
    // 生成一个路径
    const Path = this.parsePath(this.props.to, history.createHref)
    // console.log(Path)
    return (
      <a className={this.props.activeClass} href={`${Path}`} onClick={(e) => {
        e.preventDefault();// 禁止默认行为
        history.push(Path)
      }}>
        {this.props.children}
      </a>
    )
  }

  render() {
    return (
      <ctx.Consumer>
        {this.renderA}
      </ctx.Consumer>
    )
  }
}

