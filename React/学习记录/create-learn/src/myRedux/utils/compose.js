// eslint-disable-next-line import/no-anonymous-default-export
export function compose (...fns) {
  //用于接收所有中间件函数
  if(fns.length === 1){
    return fns[0];
  }

  if(fns === undefined || fns.length === 0){
    return args  => args;
  } 
  // 返回一个嵌套函数，传递一个参数，运行所有函数
  return fns.reduce((a, b) => (...args) => a(b(...args)))

}

// 接收 不定数量的 函数 将参数 
// 高阶组合函数