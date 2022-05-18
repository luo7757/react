import * as LoginUserActions from "../../action/Login/loginUserAction";

const initialState = null;

export default function LoginUserReducer (state = initialState, { type, payload }) {
  console.log("login函数运行")
  switch (type) {
  case LoginUserActions.SETLOGINUSERTYPE:
    return state = payload;
  case LoginUserActions.OUTLOGINUSERTYPE:
    return state = null;
  default:
    return state
  }
}
