import { conditionType } from '../../type'

let initial = {
  page: 1,
  sex: -1,
  limit: 10,
  search: ""
}

export default function conditionReducer(state = initial, {type, payload}){
  switch(type){
    case conditionType.CHANGECONDITION: 
      if(compare(state, payload)){
        return;
      }
      return initial = {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}


function compare(obj1, obj2) {
  // 浅比较 
  for (const key in obj1) {
    if(obj1.hasOwnProperty(key)){
      if(obj1[key] !== obj2[key]){
        return false;
      }
    }
  }
  return true; // 相等 返回 true
}