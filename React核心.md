# JSX 
## 什么是JSX 
- FaceBook起草的JS扩展语法
- 本质是一个JS对象，会被babel编译，最终会被转换为createElement
- 每一个JSX表达式，有且仅有一个根节点
  - React.Fragment 
- 每个JSX 元素必须结束（XML规范）（比如在html中的img没有结束，在JSX中不行）

## 在JSX 中嵌入表达式 js表达式
- jsx 中使用注释 使用js注释 不能使用<!----> html的注释
- 将表达式作为内容的一部分
  - null 和 undefined不会显示
- 将表达式作为元素属性
- 属性使用小驼峰命名法
- 防止注入攻击
  - 自动编码
  - dangerouselySetInnerHTML

## 元素的不可变性 