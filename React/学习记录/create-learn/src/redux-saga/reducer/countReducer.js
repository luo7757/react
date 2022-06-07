import { countType } from '../type'

let initail = 0;

export default function countReducer (state = initail, {type, payload}) {
  switch(type){
    case countType.INCREASE:
      return initail = state + 1;
    case countType.DECREASE:
      return initail = state - 2;
    default:
      return state;
  }
}

