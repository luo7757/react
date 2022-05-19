import * as LoginUserActions from "../../action/Login/loginUserAction";

let initialState = null;

export default function LoginUserReducer (state = initialState, { type, payload }) {
  switch (type) {
  case LoginUserActions.SETLOGINUSERTYPE:
    return initialState = payload;
  case LoginUserActions.OUTLOGINUSERTYPE:
    return initialState = null;
  default:
    return state
  }
}
