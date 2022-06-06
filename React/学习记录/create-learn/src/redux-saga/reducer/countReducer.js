import { countType } from '../type'

let initail = 0;

export default function countReducer (state = initail, {type, payload}) {
  switch(type){
    case countType.INCREASE:
      return initail = state + 1;
    case countType.DECREASE:
      return initail = state - 2;
    case countType.ASYNCINCREASE:
      return initail = state + 3;
    case countType.ASYNDENCREASE:
      return initail = state - 4;
    default:
      return state;
  }
}

