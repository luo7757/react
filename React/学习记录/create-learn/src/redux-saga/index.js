import { all, call, delay, put, take, takeEvery } from 'redux-saga/effects';
import { countType } from './type'
import { countAction } from './action'

// 外部run函数 会接收生成器返回的数据
function* task(){
  console.log("saga执行了")
  let data = yield call(mockStudent);
  console.log(data)

  yield takeEvery(countType.ASYNDENCREASE, decreaseFn)

  yield all([test1(), test2()])
  // 在all指令数组中的生成器全部完成之前，都会阻塞 下面的代码都不会触发
  let result = yield take(countType.INCREASE) // 监听一次这个action，监听到了会返回一个完整action
  console.log("监听到了increase", result) // result 返回的action
  // 由于yield的存在，在前面的没有没触发的情况下，后面的也不会触发
  yield take(countType.ASYNCINCREASE)
  console.log("监听到了asyncincrease")
}

function* decreaseFn(){
  yield delay(2000) // 延迟 毫秒
  console.log("takeEvery指令")
  yield put(countAction.increase()) // dispatch 一个 action
}

function* test1(){
  // 直接完成
  console.log("test1")
} 

function* test2(){
  // 等待 DECREASE 触发 才会完成
  yield take(countType.DECREASE) // take 监听一次 这个action
}


function mockStudent(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(Math.random() > 0.5){
        reject(new Error("出错咯"))
      }else{
        resolve("数据")
      }
    }, 2000)
  })
}


export default task;