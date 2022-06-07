import React from 'react'

export default function StudentsList(props) {
  console.log(props)
  const list = props.data.map(s => (
    <tr key={s.id}>
      <td>{s.name}</td>
      <td>{s.address}</td>
      <td>{s.birthday}</td>
      <td>{s.phone}</td>
      <td>{s.email}</td>
      <td>{s.sex === 1 ? '女' : '男'}</td>
      <td>{s.sno}</td>
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>
          <td>name</td>
          <td>address</td>
          <td>birthday</td>
          <td>phone</td>
          <td>email</td>
          <td>sex</td>
          <td>sno</td>
        </tr>
      </thead>
      <tbody>
        {list}
      </tbody>
    </table>
  )
}
