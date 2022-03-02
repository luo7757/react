# Hellow World


```
script标签本身可以跨域，加个crossorigin用于在报错时，提供更加全面的信息
 <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
```

react-dom.development.js 提供了一个 ReactDOM 对象 里面有个函数 render 函数 
ReactDOM.render(显示的东西，容器)

## Reatc.craeteElement 
创建一个React元素，称为虚拟DOM，本质上是一个对象，不是真正的标签元素，和vue的虚拟dom一样，用对象来表示一个元素，用依赖核心库将其转为真正的元素

1、参数1，如果是一个字符串，就是一个普通的html元素
2、参数2，元素的属性，一个的对象
3、后续参数：元素的子节点

### JSX
JS 的扩展语法，不是官方支持的语法 ，需要用babel进行转义
```
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```
## 使用脚手架搭建项目
npx create-react-app 项目名称
创建后 和 vue 差距不大

官方：create-react-app
三方：umi等

## VScode 配置
设置中 emmet 的 语言包含中 添加Javascriptreact 以支持 在js中编写html

## Vscode 插件安装
- ESLint：代码检查（为什么要重新安装这个，脚手架安转的只有在运行时才会报错，vscode 的插件书写时就会报错）
- ES7 Reatc/Redux/GraphQL/Reatc-Native snippets：快速代码编写


## chrome插件安装

React Developer Tools
