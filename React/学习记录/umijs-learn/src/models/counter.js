// 在umi中的dva插件中，不像单独使用dva，是必须给namespace的，这里umi约定，如果返回的对象中没有namespace，文件名就是namespace
export default {
  state : 0,
  reducers: {
    increase: (state) => {
      return state + 1;
    },
    decrease: (state) => {
      return state - 1;
    },
  },
  effects: {
    *asyncIncrease(action, { call, put }){
      yield call(delay, 1000);
      yield put({
        type: "increase"
      })
    },
    *asyncDecrease(action, { call, put }){
      yield call(delay, 1000);
      yield put({
        type: "decrease"
      })
    }
  }
}


function delay(duration){
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  })
}