export default class ListenerManager {
  // 一个监听函数管理函数，在地址栏变化时触发所有监听函数
  listeners = new Map();
  i = 0;
  
  /**
   * 地址改变后 运行的函数
   * @param {function} fn 
   */
  addListen = (fn) => {
    // 添加处理函数
    this.listeners.set(++this.i, fn)
    return () => {
      this.listeners.delete(`${this.i}`)
    }
  }
  
  /**
   * 触发函数
   */
  triggerListener = (location, action) => {
    // 参数location 是变化之前的值
    
    Array.from(this.listeners.values()).forEach(it => it(location, action))
  }
}