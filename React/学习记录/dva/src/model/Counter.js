// eslint-disable-next-line import/no-anonymous-default-export
export default {
  namespace: "counter",
  state: 0,
  reducers: {
    increase: (state) => {
      return state + 1;
    },
    decrease: (state) => {
      return state - 1;
    },
    add(state, { payload }){
      return state = state + Number(payload)
    }
  },
  effects: {
    *asyncDecrease(action, { call, put }){
      yield call(delay, 1000); // call 具有阻断作用 ，在内部函数没有结束的情况下，会一直阻塞，如果是promise就等待resolve/reject，如果是生成器就等待return结束
      // throw new Error("发生错误了") // 发生错误 由onError捕获
      yield put({ type: "decrease" }) // 重新触发一个action
    },
    *asyncIncrease(action, { call, put }){
      yield call(delay, 1000); 
      yield put({ type: "increase" })
    }
  },
  subscriptions: {
    onSizelisten: ({history, dispatch}) => {
      window.onresize = () => {
        dispatch({
          type: "increase"
        })
      }
    },
    onStateChange: ({history, dispatch}) => {
      history.listen(() => {
        dispatch({
          type: "decrease"
        })
      })
    }
  }
}

function delay(duration){
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}