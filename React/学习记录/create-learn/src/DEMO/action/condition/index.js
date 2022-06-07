import { conditionType } from "../../type";

export function createChangeConditionAction(condition = {}) {
  // 条件确认改变  自动触发其他action
  return {
    type: conditionType.CHANGECONDITION,
    payload: condition
  }
}