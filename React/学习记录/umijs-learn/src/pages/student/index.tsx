import { connect } from "umi";

const Students = (props:any) => {
  return (
    <div>
      <button onClick={props.asyncGetAllStudents}>获取数据</button>
      学生数据：{String(props.data)}
    </div>
  )
}

const mapStateToProps = (state:any) => ({
  data: state.student
})

const mapDispatchToProps = (dispatch:Function) => ({
    asyncGetAllStudents(){
      dispatch({
        type: "student/asyncGetAllStudents"
      })
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Students)