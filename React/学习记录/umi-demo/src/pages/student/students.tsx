import * as api from '@/services/student.js';
import { useEffect, useState } from 'react';
import { connect } from 'umi';
const Student = (props:any) => {
  props.asyncGetAllStudent()
  return (
    <div>查询</div>
  )
}

const mapStateToProps = (state:any) => ({
  student: state.student
})

const mapDispatchToProps = (dispatch:Function) => ({
  asyncGetAllStudent(){
    dispatch({
      type: "student/asyncGetAllStudent"
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Student)