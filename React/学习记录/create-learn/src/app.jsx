import React, { Component, useState, useEffect } from 'react'

export default function App () {
  const [n, setN] = useState(0)
  // 下面的代码就属于副作用操作
  // document.title = `计数器:${n}`

  useEffect(() => {
    document.title = `计数器:${n}`
  })
  return (
    <div>
      <span>{n}</span>
      <button onClick={() => {
        setN(n + 1)
      }}>加一</button>
    </div>
  )
}


