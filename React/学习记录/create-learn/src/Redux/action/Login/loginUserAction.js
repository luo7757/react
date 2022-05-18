export const SETLOGINUSERTYPE = Symbol("set-login-user");
export const OUTLOGINUSERTYPE = Symbol("out--login-user");
/**
 * 设置登录用户的action
 * @param {*} user 
 * @returns 
 */
export const createSetLoginUserAction = (user) => {
  return {
    type: SETLOGINUSERTYPE,
    payload: user
  }
}
/**
 * 
 * @returns 用户只有一个
 * 直接删除
 */
export const createOutLoginUserAction = () => {
  return {
    type: OUTLOGINUSERTYPE,
  }
}