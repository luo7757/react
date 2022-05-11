import ListenerManager from "./ListenerManager";
import Block from "./BlockManger";
// 实现history，就要有一个history对象
// 两种方案： 1、自己维护一个数组，难点：必须与window.history保持一致
//           2、借用window.history, 维护一个对象，添加一些额外方法，保持每次变化和window.history一致，


export default function createBrowserHistory(options = {}) {
  const {
    keyLength = 6,
    baseName = "",
    forceRefresh = false,
    getUserConfirmation = (msg, callback) => callback(window.confirm(msg))
  } = options

  let myHistory = {};
  // 返回一个浏览器 history 对象
  const blockManger = new Block(getUserConfirmation)
  // 阻塞类

  if (typeof keyLength !== "number") {
    throw new Error("keyLength can only be anumber")
  }

  // ————————————专属window功能——————————————————
  function createLocation() {
    // 创建当前 location 对象
    const { hash, pathname, search } = window.location;
    let historyState = getState();
    return {
      hash,
      key: createKey(keyLength),
      pathname,
      search,
      state: historyState
    }
  }

  // function sliceSearch(path){
  //   return path.replace('?',"").split("&").map(it => it.split("="))
  //   .reduce((obj, key) => {
  //     obj[key[0]] = key[1]; 
  //     return obj
  //   }, {})
  // }

  function createNextLocation(path, state, baseName){
    // 根据path 生成完整的 location 对象
    const questionMarkIndex = path.indexOf('?');
    const sharpIndex = path.indexOf("#");

    let hash, pathname, search;
    // pathname 从0 到第一个 #号 或 ?号 
    pathname = path.replace(/[#?].*$/, "")
    if(questionMarkIndex === -1 || questionMarkIndex > sharpIndex){
      // 没有问号 或 问号 大于 #号 没有search
      search = ""
    }else{
      search = path.substring(questionMarkIndex, sharpIndex)
    }
    if(sharpIndex === -1){
      hash = ""
    }else{
      hash = path.substr(sharpIndex)
    }
    
    // 不携带key属性 这个属性是真正跳转后才会有
    return {
      hash,
      pathname,
      search,
      state,
    }
  }

  function getState() {
    let historyState, { state } = window.history;
    if (state === null) {
      historyState = undefined;
    } else if (typeof state !== "object") {
      // 排除不是对象的情况 直接赋值
      historyState = state;
    } else {
      // 是对象 有key关键字的 就是我们需要的
      // 本库 封装时 使用 push 方法有state参数，自动在widnow.history.state中注册一个对象key为 push(url, state)的state值
      if ("key" in state) {
        historyState = state.key;
      } else {
        // 没有key属性  直接全部拿过来
        historyState = state;
      }
    }
    return historyState
  }

  /**
   * 传递监听函数
   * @param {fn} listen 
   */
  function addEventListen(listen){
    window.addEventListener('popstate', () => {
      listen(myHistory)
      // 用户每次通过window自带的回退前进功能时，更新myHistory.location对象
      updateLocation()
    })
  }


  // 创建location 对象
  const location = createLocation(keyLength)
  // 创建监听
  const listen = new ListenerManager(myHistory)
  // 添加监听运行函数
  addEventListen(listen.triggerListener)

  // 控制函数
  function go(step) {
    // 这些函数在使用
    // 控制前进后退
    window.history.go(step);
  }
  function back() {
    // 后退
    window.history.back()
  }
  function forward() {
    // 前进
    window.history.forward()
  }
  function updateLocation() {
    // 更新location
    myHistory.location = createLocation(keyLength)
  }

  /**
   * @param {any} to 路径 可以是字符串 也可以是对象 不包括basename
   * Object ： {
   *  pathname: string,
   *  hash: "",
   *  search：string,
   * }
   * @param {any} state 
   */
  function push(to, state) {
    // 添加一条路径
    changePage("PUSH", to, state)
  }
  function replace(to, state) {
    // 替换顶部一条路径
    changePage("REPLACE", to, state)
  }

  function changePage(type, to, state) {
    if (!to) {
      throw new Error('to need string or object')
    }
    const Path = handlePath(to, baseName);  //下一个页面的地址


    // state 参数问题 每个页面都传递了state，前面的state是否保留，state如果只存在于地址携带的页面中
    // 不需要做任何处理
    // 如果需要保留之前页面的state参数
    // 那就需要在每次改变时，先获取state做一个混合再写入
    // 由于state 可以是string、number、boolean、object 这时候处理就比较复杂了
    // const State = Object.assign({}, state, getState())
    
    // console.log(Path,state, type)
    // 当前页面信息
    const prev = {location: myHistory.location, action : myHistory.action}
    // 下一个页面信息
    const next = {location: createNextLocation(Path, state), action: type}
    // const from = {location: nextLocation, }

    // 添加阻塞 下面的函数依赖于阻塞的返回结果, 用户调用block函数,即添加阻塞
    blockManger.tirggerBlock(prev, next, () => {
      // 已有阻塞 触发阻塞 根据 blockManger.getUserConfirmation 中的 callback 返回值 进行后续处理
      
      if(type === "PUSH"){
        window.history.pushState(state, null, Path)
      }else if(type === "REPLACE"){
        window.history.replaceState(state, null, Path)
      }

      changeAction(myHistory, type)
      updateLocation()
    })
    
    // getUserConfirmation = (msg, callback) => callback(window.confirm(msg))
    

    // if(type === "PUSH"){
    //   window.history.pushState(state, null, Path)
    // }else if(type === "REPLACE"){
    //   window.history.replaceState(state, null, Path)
    // }

    // changeAction(myHistory, type)
    // updateLocation()

    // 处理强制刷新后 state 丢失问题
    // 在前一个页面加入了 state，后续页面由于强制刷新导致state丢失
    // 在刷新前保存 state 刷新后加入state
    // 强制刷新还是不加入了，从使用角度就不是一个好功能
    // if(forceRefresh){
    //   window.history.replaceState({
    //     key: createKey(keyLength),
    //     state,
    //   }, null, Path) 
    //   window.location.href = Path;
    // }
  }


  return Object.assign(myHistory, {
    action: "POP",
    back,
    block: blockManger.block,
    createHref: to => createHref(to, location, baseName),
    go,
    forward,
    listen: listen.addListen,
    location,
    push,
    replace,
  })
}















// ————————————————————————————————独立功能——————————————————————
/**
 * 完整路径处理函数
 * @param {string or object} to 
 * @param {object} location 
 * @param {string} baseName 
 * @returns 
 */
function createHref(to = "", location, baseName) {
  if (!to) {
    // 没有传递 to，返回 basename + 当前地址
    return handlePath(location, baseName)
  }
  // 传递了to 返回 basename + to
  return handlePath(to, baseName)
}

/**
 * action 改变函数
 * @param {object} history 
 * @param {string} type 
 */
function changeAction(history, type) {
  // 改变 action 类型
  history.action = type
}

/**
 * 路径合成函数
 * @param {*} path 
 * @param {*} baseName 
 * @returns 
 */
function handlePath(path = "", baseName) {
  let Path = path;
  // 生成路径
  if (typeof path === "string") {
    //  处理一下 填写参数时没有开头写 / 的情况
    if (!path.startsWith("/")) {
      Path = `/${path}`
    }
  } else if (typeof path === "object") {
    if (baseName) {
      Path = `${baseName}/${path.pathname || ""}${path.search || ""}${path.hash || ""}`;
    }
    Path = `${path.pathname || ""}${path.search || ""}${path.hash || ""}`;
  }
  // 处理结尾多出来的 / 
  if(Path.length === 1){
    return Path;
  }
  return Path.replace(/\/$/, "");
}



function createKey(keyLength) {
  // 创建随机 key 值
  return (Math.random() + Date.now()).toString(36).slice(2, 2 + keyLength)
}