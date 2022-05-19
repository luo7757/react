import * as LoginUserActions from "../../action/Login/loginUserAction";

let initialState = {};

export default function LoginUserReducer (state = initialState, { type, payload }) {
  switch (type) {
  case LoginUserActions.SETLOGINUSERTYPE:
    return initialState = payload;
  case LoginUserActions.OUTLOGINUSERTYPE:
    return initialState = {};
  default:
    return state
  }
}
