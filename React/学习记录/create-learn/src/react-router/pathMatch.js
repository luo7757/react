import { pathToRegexp, match, parse, compile } from 'path-to-regexp';
/**
 * pathToRegexp(path, keys?, options?)
 * path: pathname
 * keys: empty Arr
 * options: {
 *    sensitive: case sensitive
 *    strict: use strict
 *    end: exact
 * }
 */

// 这个函数负责将获得的字符串路径 转为一个路径匹配对象
/**
 * 
 * @param {string}  pathname  路径正则字符串
 * @param {object} options   路径匹配配置
 * @param {object} return 返回对象
 * { 
 *  isExact: bool, 是否精确匹配
 *  params: Object, 参数
 *  path: siting, router匹配路径
 *  url: string 实际匹配路径
 * }
 */


export default function pathMatch (pathname, options = {}) {
  const locationPath = window.location.pathname; //实际路径

  const keys = [];
  const regexp =  pathToRegexp(pathname, keys, assginOptions(options))  // 创建正则匹配规则
  const regResult = regexp.exec(locationPath)  

  const result = parse(pathname) // 获取路径 params 参数 对象
  const Match = match(pathname)  // 创建路径匹配对象
  const Matchs = Match(locationPath) // 获得匹配结果

  const len = result.length; // 提取参数 用于生产对象
  const params = {}
  
  for (let i = 1; i < len; i++) {
    params[result[i].name] =  regResult[i]
  }
  // 返回想要的对象格式
  return {
    isExact: !!Matchs,
    params,
    path: pathname,
    url: locationPath,
  }
}


function assginOptions(options) {
  // 混合配置对象
  const defaultOptions = {
    sensitive: false,
    strict: false,
    end: false
  }

  return {
    sensitive: options.sensitive || defaultOptions.sensitive,
    strict: options.strict || defaultOptions.strict,
    end: options.exact || defaultOptions.end
  }
}

