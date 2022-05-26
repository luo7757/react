import { compose } from "./utils/compose";

// eslint-disable-next-line import/no-anonymous-default-export
export default (...middlewares) => {
  // 第一层函数 接收所有中间件 并进行处理
  return (createStore) => {
    // 第二层函数 接收一个创建仓库函数 createStore 
    return  (reducer, defaultState) => {
      // 第三层参数 创建仓库所需的参数 reducer defaultState 
      const store = createStore(reducer, defaultState); // 创建仓库 原始仓库对象
      let dispatch = () => { throw new Error("目前不能使用dispatch")} // 在完成中间件注入前，不能使用dispatch
      const simpleStore = {
        getState: store.getState,
        dispatch: store.dispatch
      } // 提取需要的函数

      const dispatchProducers = middlewares.map(mid => mid(simpleStore));
      // 使用compose 运行每一个中间件函数  传递 store 对象，传递初始dispatch
      dispatch = compose(...dispatchProducers)(store.dispatch); 
      // 通过中间件处理后，返回组合后的dispatch
      return {
        ...store,
        dispatch
      }
      // 覆盖原本dispatch函数
    }
  }
}

// 中间件函数
// const Test2 = store => next => action => {
//   console.log('旧数据2', store.getState())
//   next(action)
//   console.log("改变方式2",action)
//   console.log("新数据2", store.getState())
// } 