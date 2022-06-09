import { default as studentReducer } from './student/index';
import { default as conditionReducer } from './condition/index';

import { combineReducers } from '../../myRedux';

import { connectRouter } from 'connected-react-router'
import history from '../../connect-react-router/history';
// 使用connect-react-router 创建一个history对象后，交由其创建一个reducer
// 通过仓库来管理 路由对象
export default combineReducers({
  student: studentReducer,
  condition: conditionReducer,
  router: connectRouter(history)
})