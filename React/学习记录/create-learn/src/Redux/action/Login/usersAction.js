import { findStudents } from "../../../components/api/students";
// action中使用副作用函数 中间件thunk完成处理


export const ADDUSERTYPE = Symbol("add-user");
export const DELETEUSERTYPE = Symbol("delete-user");
export const EDITUSERTYPE = Symbol("edit-user");
export const GetStudentAll = Symbol("get-student-all")
export const GetStudentIsLoading = Symbol("get-student-is-loading")
export const SetStudentAll = Symbol("set-student-all")


export const createAddUserAction = (user = {}) => {
  return {
    type: ADDUSERTYPE,
    payload: user
  }
}

export const createDeleteUserAction = ({id}) => {
  return {
    type: DELETEUSERTYPE,
    payload: {
      id
    }
  }
}

export const createEditUserAction = ({id, ...payload}) => {
  return {
    type: EDITUSERTYPE,
    payload: {
      id,
      ...payload
    }
  }
}

// export function createGetStudentAllAction (student) {
//   return {
//     type: GetStudentAll,
//     payload:student
//   }
// }

export function createGetStudentIsLoadingAction (bool) {
  return {
    type: GetStudentIsLoading,
    payload: bool
  }
}

export function createSetStudentAllAction(student){
  return {
    type: SetStudentAll,
    payload: student
  }
}

export function createGetStudentAllAction () {
  // thunk中间件 允许action是一个副作用函数
  return async function (dispatch){
    // thunk处理时，会传递三个参数 1、dispatch、getState、extra
    // 注意 dispatch 不是 被中间件处理过的dispatch 是初始dispatch，在完成thunk处理后，会重新走一次完整的中间件流程
    dispatch(createGetStudentIsLoadingAction(true))
    const {data} = await findStudents({})
    dispatch(createSetStudentAllAction(data))
    dispatch(createGetStudentIsLoadingAction(false))
  }
}
