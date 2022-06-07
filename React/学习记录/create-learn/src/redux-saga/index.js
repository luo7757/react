import { all, call, delay, put, select, take, takeEvery } from 'redux-saga/effects';
import { countType } from './type'
import { countAction } from './action'
import { studentType } from '../DEMO/type'
import { studentAction } from '../DEMO/action'
import { findStudents } from '../components/api/students'

function* Task(){
  yield all([countTask(), studentTask()])
}
// 用于监听的异步action类型 不会在reducer中进行处理 而是由saga触发其他的同步类型action
function* countTask (){
  yield takeEvery(countType.ASYNCINCREASE, asyncIncrease)
  yield takeEvery(countType.ASYNDENCREASE, asyncDecrease)
}

function* asyncIncrease(){
  yield delay(2000)
  yield put(countAction.increase())
}

function* asyncDecrease(){
  yield delay(2000)
  yield put(countAction.decrease())
}

function* studentTask(){
  // 不断监控异步的action，监控到了执行一个生成器函数
  yield takeEvery(studentType.ASYNCGETSTUDENTDATE, asyncGetStudentDate)
}

function* asyncGetStudentDate(){
  console.log("监控到了")
  // 收到异步action，开始获取数据
  const condition = yield select(state => state.condition);
  // redux-saga中间件中的 select 会获得当前的仓库对象， 接受一个函数，对当前仓库数据进行过滤，得到想要的数据
  const { count, data } = yield call(findStudents,condition)
  console.log(count, data)
  // 通过获得的仓库中保存的查询条件进行异步数据获取
  yield put(studentAction.createSetStudentDataAction(data))
  yield put(studentAction.createSetStudentCountAction(count))
  // 得到异步数据，通过put一个同步action，将数据进行保存
}

export default Task;