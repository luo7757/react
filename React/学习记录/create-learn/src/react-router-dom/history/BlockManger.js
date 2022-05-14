export default class Block {
  // 阻塞函数
  // 逻辑： 在对浏览器的地址栏做修改前，通过本类做判断
  // 通过则 进行修改, 不通过则不处理
  // 处理方式: 传入 getUserConfirmation 函数
  constructor(getUserConfirmation){
    this.getUserConfirmation = getUserConfirmation;
  }

  prompt = null;

  block = (msg) => {
    // 添加阻塞
    // 阻塞函数
    if(typeof msg !== "string" && typeof msg !== "function"){
      throw new Error("msg can only be functions(void: => string) or strings")
    }else{
      this.prompt = msg;
    }
    return () => {
      this.prompt = null;
    }
  }

  tirggerBlock = (prev, next, callback) => {
    // 触发阻塞
    if(!this.prompt){
      // 没有阻塞 
      callback()
      return;
    }
    let message;
    //获取阻塞消息
    if(typeof this.prompt === "string"){
      message = this.prompt
    } else {
      // 由于全局只会有一个阻塞，阻塞添加与取消，可以由用控制
      // 那个可以提供当前的location 和 下一次的 location 来判断下次跳转是否添加阻塞 
      message = this.prompt(prev, next);
    }
    if(typeof message !== "string"){
      // 最终的消息不是一个字符串 终止跳转
      return ;
    }
    this.getUserConfirmation(message, prev, next, result => {
      result && callback()
    })
  }
}