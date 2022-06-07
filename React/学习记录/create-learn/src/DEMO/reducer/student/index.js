import { studentType } from "../../type";

let initial = {
  isloading: false,
  student: [],
  count: 0
};

export default function studentReducer (state = initial, {type, payload}) {
  switch(type){
    case studentType.SETSTUDENTDATA:
      return initial = {
        ...state,
        student: payload
      };
    case studentType.FINDSTUDENT: 
      return initial = {
        ...state,
        student: payload
      };
    case studentType.ISLOADING: 
      return initial = {
        ...state,
        isloading: payload
      };
    case studentType.SETSTUDENTCOUNT: 
      return initial = {
        ...state,
        count: payload
      }
    default: 
      return state;
  }
}