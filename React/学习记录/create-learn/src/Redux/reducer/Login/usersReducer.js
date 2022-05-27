import * as UsersAction from "../../action/Login/usersAction";

let initialState = {
  student: [],
  user: [],
  isLoading: false
};

export default function UsersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case UsersAction.ADDUSERTYPE:
      return initialState = {
        ...initialState,
        user: [...state.user, payload]
      };
    case UsersAction.DELETEUSERTYPE:
      return initialState = {
        ...initialState,
        user: [...state.user.filter(it => it.id !== payload.id)]
      };
    case UsersAction.EDITUSERTYPE:
      return initialState = {
        ...initialState,
        user: state.user.map(it => {
          if(it.id === payload.id){
            return {...it, ...payload}
          }
          return {...it}
        })
      };
    case UsersAction.SetStudentAll: 
      return initialState = {
        ...initialState,
        student: payload,
      };
    case UsersAction.GetStudentIsLoading:
      return initialState = {
        ...initialState,
        isLoading: payload,
      };
    default:
      return state;
  }
}
