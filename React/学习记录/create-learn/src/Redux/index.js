//  使用手写redux 
import { createStore } from '../myRedux';
import applyMiddleware from '../myRedux/applyMiddleware';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import Task from '../redux-saga'
import { default as combine } from '../DEMO/reducer/index'
import { composeWithDevTools } from '@redux-devtools/extension';
import { routerMiddleware  } from 'connected-react-router'
import history from '../connect-react-router/history';

const sagaMiddleware = createSagaMiddleware()
// 添加一个中间件routerMiddleware 来管理 history 对象， 当触发特殊的action时，中间件进行处理 
const store = composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware, logger))(createStore)(combine);

sagaMiddleware.run(Task)

export default store;