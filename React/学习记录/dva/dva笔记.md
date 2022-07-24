# dva

> 官方网站：http://dvajs.com
> dva不仅仅是一个第三方库，更是一个框架，它主要整合了redux的相关内容，让我们处理数据更加容易，实际上，dva依赖了很多：react/react-router/redux/redux-saga/react-redux/connected-react-router等。

# dva的使用

1. dva默认导出一个函数，通过使用该函数，可以得到一个dva应用程序对象


2. dva对象.router：路由方法，传入一个函数，返回一个react节点，将来，应用程序启动后会自动渲染节点。就是一个根节点

3. dva对象.start:该方法就是启动应用程序，其原理就是内部调用了ReactDom.render，实现了相同的作用。该函数传入一个选择器，用于选中页面中的某个dom元素，react会将内容渲染到该元素内部。

4. dva对象.modle:该方法用于定义一个模型，该模型可以理解为redux的action/reducer/redux-saga副作用处理的整合，整合成一个对象，将该对象传入modle方法即可,model与页面没有任何关系，其管理的是仓库中的数据。模型定义必须在启动之前定义
   1. namespace（必须）：命名空间，该属性是一个字符串，字符串的值，会被作为仓库中的属性保存
   2. state：仓库中的模型默认值，初始状态
   3. reducers：该属性配置为一个对象，对象中的每一个属性都是一个reducer，dva约定方法的名字就是匹配的action类型
   4. effects：处理副作用，底层时使用redu-saga实现的，该属性配置为一个对象，对象中的每个方法均处理一个副作用，方法的名字，就是匹配的action类型
      1. 参数1：action
      2. 参数2：封装好的 saga/effect 对象
   5. subscriptions：配置为一个对象，该对象中可以写任意数量任意名称的属性，每个属性是一个函数，这些函数会在模型加入到仓库中后立即运行（注册订阅者）