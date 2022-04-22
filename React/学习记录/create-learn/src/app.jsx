import React, { useContext } from 'react'

const ctx = React.createContext();


function Test() {
  return (
    <ctx.Consumer>
      {value => (<h1>Test, 上下文的value：{value}</h1>)}
    </ctx.Consumer>
  )
}

function TestContext() {
  const value = useContext(ctx)
  return (
    <div>
      TestContext的上下文的value：{value}
    </div>
  )
}

export default function App () {
  return (
    <div>
      <ctx.Provider value="abs">
        <Test />
      </ctx.Provider>
      <ctx.Provider value="ccc">
        <TestContext />
      </ctx.Provider>
    </div>
  )
}


