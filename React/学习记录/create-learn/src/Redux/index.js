//  使用手写redux 
import { createStore } from '../myRedux';
import applyMiddleware from '../myRedux/applyMiddleware';
// logger 中间件 调试使用
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import Task from '../redux-saga'
import { default as combine } from '../DEMO/reducer/index'


const sagaMiddleware = createSagaMiddleware()

const store = applyMiddleware(sagaMiddleware, logger)(createStore)(combine);

// run 注册 saga 检测，开启一个模块用于处理异步
sagaMiddleware.run(Task)

export default store;