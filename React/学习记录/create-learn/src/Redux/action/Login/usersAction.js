export const ADDUSERTYPE = Symbol("add-user");
export const DELETEUSERTYPE = Symbol("delete-user");
export const EDITUSERTYPE = Symbol("edit-user");

export const createAddUserAction = (user = {}) => {
  return {
    type: ADDUSERTYPE,
    payload: user
  }
}

export const createDeleteUserAction = (id = "") => {
  return {
    type: DELETEUSERTYPE,
    payload: {
      id
    }
  }
}

export const createEditUserAction = ({id, ...payload}) => {
  return {
    type: EDITUSERTYPE,
    payload: {
      id,
      ...payload
    }
  }
}