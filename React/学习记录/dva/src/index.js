import App from './App';
import dva from 'dva';
import counter from './model/Counter'
import { createBrowserHistory } from 'history'

// 创建一个应用程序
const app = dva({
  history: createBrowserHistory(),
  initialState: {
    counter: 123
  },
  onError: (err,disptach) => {
    // 发生错误时， 传递错误对象，及 dispatch 函数用于错误信息处理
    console.log(err.message, disptach)
  },
  // onAction: store => next => action => {
  //   // 配置一个redux中间件，当每次action变化时都会运行
  //   console.log('onAction执行')
  //   next(action)
  // },
  onStateChange: (state) => {
    console.log("onStateChange", state)
  },
  onReducer: (reducer) => {
    // 对rededucer进行再次封装，这个函数需要返回一个reducer
    console.log("再次封装")
    return reducer;
  }
  
});

const onAction = store => next => action => {\
  console.log("添加中间件")
  next(action)
}

app.use(onAction)



// 传入一个函数，该函数返回一个react组件/节点，初始化渲染该节点
app.router(App)


// 定义数据模型
app.model(counter)




// 启动到选中元素中
app.start(document.getElementById('root'))



// ReactDOM.render(<React.StrictMode>
//   <App />
// </React.StrictMode>, document.getElementById('root'));

