import * as UsersAction from "../../action/Login/usersAction";

const initialState = [];

export default function UsersReducer(state = initialState, { type, payload }) {
  console.log("user函数运行")
  switch (type) {
    case UsersAction.ADDUSERTYPE:
      return [...state, payload];
    case UsersAction.DELETEUSERTYPE:
      return [...state.filter(it => it.id !== payload.id)]
    case UsersAction.EDITUSERTYPE:
      return state.map(it => {
        if(it.id === payload.id){
          return {...it, ...payload}
        }
        return {...it}
      })
    default:
      return state;
  }
}
