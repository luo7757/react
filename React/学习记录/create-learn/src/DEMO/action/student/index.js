import { studentType } from "../../type/inex"
import { createChangeConditionAction } from '../condition/index'
import { getAllStudents, findStudents } from "../../../components/api/students"

export function createIsLoadingAction (bool) {
  return {
    type: studentType.ISLOADING,
    payload: bool
  }
}
 
export function createSetStudentDataAction (student) {
  return {
    type: studentType.SETSTUDENTDATA,
    payload:student
  }
}

export function createSetStudentCountAction(num) {
  return {
    type: studentType.SETSTUDENTCOUNT,
    payload: num
  }
}

export function createGetStudentAllAction(){
  return async (dispatch, getState, extra) => {
    dispatch(createIsLoadingAction(true))
    const result = await getAllStudents()
    dispatch(createSetStudentCountAction(result.data.length));
    dispatch(createSetStudentDataAction(result.data));
    dispatch(createIsLoadingAction(false));
  }
}

export function createFindStudentAction(condition = {}){
  return async (dispatch, getState, extra) => {
    dispatch(createIsLoadingAction(true))
    const {count, data} = await findStudents(condition);
    dispatch(createChangeConditionAction(condition))
    dispatch(createSetStudentDataAction(data))
    dispatch(createSetStudentCountAction(count))
    dispatch(createIsLoadingAction(false))
  } 
}