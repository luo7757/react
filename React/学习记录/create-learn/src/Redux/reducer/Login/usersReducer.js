import * as UsersAction from "../../action/Login/usersAction";

let initialState = [];

export default function UsersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case UsersAction.ADDUSERTYPE:
      return initialState = [...state, payload];
    case UsersAction.DELETEUSERTYPE:
      return initialState = [...state.filter(it => it.id !== payload.id)]
    case UsersAction.EDITUSERTYPE:
      return initialState = state.map(it => {
        if(it.id === payload.id){
          return {...it, ...payload}
        }
        return {...it}
      })
    default:
      return state;
  }
}
