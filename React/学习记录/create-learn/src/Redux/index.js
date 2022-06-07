//  使用手写redux 
import { createStore } from '../myRedux';
import applyMiddleware from '../myRedux/applyMiddleware';

// logger 中间件 调试使用
import logger from 'redux-logger';

import thunk from '../myRedux-thunk';


import createSagaMiddleware from 'redux-saga';

import { countReducer } from '../redux-saga/reducer'
import { countAction } from '../redux-saga/action'

import Task from '../redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = applyMiddleware(sagaMiddleware, logger)(createStore)(countReducer);

// run 注册 saga 检测，开启一个模块用于处理异步
sagaMiddleware.run(Task)

export default store;