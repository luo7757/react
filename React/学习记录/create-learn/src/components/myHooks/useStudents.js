import { useEffect, useState } from 'react'
import { getAllStudents } from '../api/students.js'
/**
 * 获取全部学生数据
 */
export function useAllStudents(){
  const [ students, setStudents ] = useState([])
  useEffect(() => {
    (async () => {
      const stus = await getAllStudents();
      console.log(stus)
      setStudents(stus)
    })()
  }, [])
  return students
}