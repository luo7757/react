import React, { PureComponent, useRef, useImperativeHandle } from 'react'


class Test extends PureComponent{

  method() {
    console.log('Test method is called')
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    )
  }
}

const Test2 = React.forwardRef(Test1)
// 包装一个ref转发

function Test1 (props, ref) {
  // 函数组件不存在实例等东西 ,所以不能添加ref
  // 同时为这个函数组件添加一些方法
  const Ref = useRef(ref)
  // 再次转发 ref

  useImperativeHandle(ref, () => {
    // 为指定 ref 对象 添加方法 返回的
    // 使用 这个方法会替换掉 current对象
    // current 指向这个函数返回的对象，不再指向 元素实例
    // 可以再次转发 获取实例
    return {
      method() {
        console.log('method')
      },
      current: Ref
    }
  }, [])
  // 如果不给依赖项，则每次运行函数组件都会调用该方法
  // 如果使用了依赖项，则第一次调用后，在依赖项没有发生变化时，不会再次调用
  return (
    // 获得 元素实例
    <div ref={Ref}>
      Test1
    </div>
  )
}


export default function App() {
  const testRef = useRef();
  // 创建一个 ref 对象
  return (
    <div>
      {/* <Test ref={testRef} /> */}
      <Test2 ref={testRef}/>
      <button onClick={() => {
        // Test2 传递ref 对象 转发到Test1中 做为第二个参数 在Test1 中接受，绑定到元素上
        console.log(testRef.current)
        // 但是在函数组件中 不存在实例方法等东西，那么想要为函数组件添加方法，目前就不行了
        // ImperativeHandle Hook 就有作用了
        testRef.current.method()
      }}>点击调用Test组件的method方法</button>
    </div>
  )
}