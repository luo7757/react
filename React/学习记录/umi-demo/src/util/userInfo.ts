// 本地管理用户信息 保存最后一次用户的信息

export function setUserInfoToLocalStorage(payload:any){
  window.localStorage.setItem("userInfo", JSON.stringify(payload))
}

export function removeUserInfoToLocalStorage(){
  window.localStorage.removeItem("userInfo")
}

export function getUserInfoToLocalStorage(){
  return JSON.parse(window.localStorage.getItem("userInfo") || JSON.stringify(""))
}