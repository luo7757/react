//  使用手写redux 
import { createStore } from '../myRedux';
import applyMiddleware from '../myRedux/applyMiddleware';

// logger 中间件 调试使用
import logger from 'redux-logger';

import thunk from '../myRedux-thunk';

import combineReducers from '../myRedux/combineReducers';

import { StudentReducers } from '../DEMO/index'


import { StudentActions } from '../DEMO/index';

const combine = combineReducers({
  studnet: StudentReducers
})

console.log(StudentActions.studentAction)
const store = applyMiddleware(thunk,logger)(createStore)(combine);

store.dispatch(StudentActions.studentAction.createFindStudentAction())
