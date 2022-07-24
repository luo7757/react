import App from './App';
import dva from 'dva';

import counter from './model/Counter'

// 创建一个应用程序
const app = dva();

// 传入一个函数，该函数返回一个react组件/节点，初始化渲染该节点
app.router(App)


// 定义数据模型
app.model(counter)




// 启动到选中元素中
app.start(document.getElementById('root'))



// ReactDOM.render(<React.StrictMode>
//   <App />
// </React.StrictMode>, document.getElementById('root'));

