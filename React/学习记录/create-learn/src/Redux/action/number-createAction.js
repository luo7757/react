import { default as ActionType} from './action-type.js'

export function setNumberAction(payload){
  return {
    type: ActionType.SET,
    payload,
  }
}
export function increaseNumberAction() {
  return {
    type: ActionType.INCREASE,
  }
}
export function decreaseNumberAction() {
  return {
    type: ActionType.DECREASE,
  }
}
