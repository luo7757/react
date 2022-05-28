import { default as studentReducer } from './student/index';
import { default as conditionReducer } from './condition/index';

import { combineReducers } from '../../myRedux';

export default combineReducers({
  student: studentReducer,
  condition: conditionReducer
})