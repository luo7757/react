import { countType } from '../type'


export function increase(payload) {
  return {
    type: countType.INCREASE,
    payload,
  }
}

export function decrease(payload) {
  return {
    type: countType.DECREASE,
    payload,
  }
}

export function asyncIncrease(payload) {
  return {
    type: countType.ASYNCINCREASE,
    payload,
  }
}

export function asyncDecrease(payload) {
  return {
    type: countType.ASYNDENCREASE,
    payload,
  }
}