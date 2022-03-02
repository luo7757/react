import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const url = "https://t12.baidu.com/it/u=1865213500,1536776311&fm=179&app=42&f=JPEG?w=120&h=160&s=2D43E404440588FE3E0DC3970300D08D"

const content = "<div>一个div元素</div>";
// 由于这个数据可能来自用户在页面上的输入 ，为了完全 字符串都是采用 innerText 来渲染数据
const div = (
  <div>
    <img src={url} alt="图片" style={{
      height: "500px",
      width: "500px"
    }} className="imgs"/>
    <p>
      {content}
    </p>
    <div dangerouslySetInnerHTML={{
      __html: content
    }}>
      {/* 当我们有这样的需求将一个元素字符串转为真正的元素，使用这种方式, 属实恶心*/}
      {/* 但从设计的模式来说，采用这种方式能够防止 不小心使用了一些危险的操作 */}
    </div>
  </div>
)
// style 对应到 dom.style中的对象  {{}} 两个大括号 外面的括号是 jsx 表达式 里面的括号 代表style对象
// 属性使用小驼峰命名法  有些关键字重复 要避开，比如class  -》 className

ReactDOM.render(div,document.getElementById('root'));